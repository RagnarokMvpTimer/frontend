import { createContext, useState, useEffect, ReactNode } from 'react';
import moment from 'moment';

import { getMvpRespawnTime } from '../utils';
import { EditMvpModal } from '../components/EditMvpModal';
import { Mvp } from '../interfaces';
import mvpsData from '../data/data.json';

interface MvpProviderProps {
  children: ReactNode;
}

interface MvpsContextData {
  activeMvps: Array<Mvp>;
  allMvps: Array<Mvp>;
  respawnAsCountdown: boolean;

  resetMvpTimer: (mvp: Mvp) => void;
  killMvp: (mvp: Mvp, time?: Date | null) => void;
  removeMvp: (mvp: Mvp) => void;

  setEditingMvp: (mvp: Mvp) => void;
  openAndEditModal: (mvp: Mvp) => void;
  toggleEditModal: () => void;
}

export const MvpsContext = createContext({} as MvpsContextData);

export function MvpProvider({ children, ...rest }: MvpProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [respawnAsCountdown, setRespawnAsCountdown] = useState(false);
  const [editingMvp, setEditingMvp] = useState<Mvp>({} as Mvp);
  const [activeMvps, setActiveMvps] = useState<Array<Mvp>>([]);
  const [allMvps, setAllMvps] = useState<Array<Mvp>>(
    mvpsData.sort((a, b) => a.stats.level - b.stats.level)
  );

  const toggleEditModal = () => setIsEditModalOpen((prev) => !prev);

  function resetMvpTimer(mvp: Mvp) {
    const updatedMvp = { ...mvp, deathTime: new Date() };
    setActiveMvps((state) =>
      state.map((m) => (m.deathMap === mvp.deathMap ? updatedMvp : m))
    );
  }

  function removeMvp(mvp: Mvp) {
    setActiveMvps((state) => state.filter((m) => m.deathMap !== mvp.deathMap));
  }

  function killMvp(mvp: Mvp, time?: Date | null) {
    const killedMvp = {
      ...mvp,
      deathTime: time || new Date(),
    };
    setActiveMvps(
      [...activeMvps, killedMvp].sort((a: Mvp, b: Mvp) => {
        if (a.deathTime && b.deathTime) {
          return moment(a.deathTime)
            .add(getMvpRespawnTime(a), 'ms')
            .diff(moment(b.deathTime).add(getMvpRespawnTime(b), 'ms'));
        }
        return 0;
      })
    );
  }

  function respawnNotification(mvp: Mvp) {
    new Audio('./notification1.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification(`${mvp.name} will respawn soon...`, {
        body: `At ${mvp.deathTime?.toLocaleTimeString()}`,
      });
    }
  }

  function openAndEditModal(mvp: Mvp) {
    setEditingMvp(mvp);
    toggleEditModal();
  }

  useEffect(() => {
    if (!isLoading) return;

    try {
      const data = localStorage.getItem('activeMvps');
      if (!data) return;
      const dataParse = JSON.parse(data);
      if (!dataParse) return;

      const finalData = dataParse.map((mvp: Mvp) => ({
        ...mvpsData.find((m) => m.id === mvp.id),
        deathMap: mvp.deathMap,
        deathPosition: mvp.deathPosition,
        deathTime: moment(mvp.deathTime).toDate(),
      }));

      setActiveMvps(finalData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return;

    const data = activeMvps.map((mvp) => ({
      id: mvp.id,
      deathMap: mvp.deathMap,
      deathTime: mvp.deathTime,
      deathPosition: mvp.deathPosition,
    }));
    localStorage.setItem('activeMvps', JSON.stringify(data));
  }, [activeMvps]);

  useEffect(() => {
    if (isLoading) return;

    const activeSpawns = activeMvps.map((m) => m.deathMap);
    const filteredAllMvps = mvpsData
      .map((mvp) => ({
        ...mvp,
        spawn: mvp.spawn.filter(
          (spawn) => !activeSpawns.includes(spawn.mapname)
        ),
      }))
      .filter((mvp) => mvp.spawn.length > 0);
    setAllMvps(filteredAllMvps);
  }, [activeMvps]);

  useEffect(() => {
    if (Notification.permission === 'granted') return;
    Notification.requestPermission();
  }, []);

  return (
    <MvpsContext.Provider
      value={{
        activeMvps,
        allMvps,
        respawnAsCountdown,
        resetMvpTimer,
        killMvp,
        removeMvp,
        toggleEditModal,
        setEditingMvp,
        openAndEditModal,
      }}
    >
      {children}
      {isEditModalOpen && <EditMvpModal mvp={editingMvp} />}
    </MvpsContext.Provider>
  );
}
