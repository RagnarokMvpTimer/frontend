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
  //toggleDeathMapModal: (mvp: Mvp) => void;
}

export const MvpsContext = createContext({} as MvpsContextData);

export function MvpProvider({ children, ...rest }: MvpProviderProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [respawnAsCountdown, setRespawnAsCountdown] = useState(false);
  const [editingMvp, setEditingMvp] = useState<Mvp>({} as Mvp);
  const [activeMvps, setActiveMvps] = useState<Array<Mvp>>([]);
  const [allMvps, setAllMvps] = useState<Array<Mvp>>(
    mvpsData.sort((a, b) => a.stats.level - b.stats.level)
  );

  const toggleEditModal = () => setIsEditModalOpen((prev) => !prev);

  function resetMvpTimer(mvp: Mvp) {
    const newMvp = { ...mvp, deathTime: new Date() };
    setAllMvps(allMvps.map((m) => (m.id === mvp.id ? newMvp : m)));
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

  //function toggleDeathMapModal(mvp: Mvp) {}

  useEffect(() => {
    if (Notification.permission === 'granted') return;
    Notification.requestPermission();
  }, []);

  useEffect(() => {
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
        //toggleDeathMapModal,
      }}
    >
      {children}
      {isEditModalOpen && <EditMvpModal mvp={editingMvp} />}
    </MvpsContext.Provider>
  );
}
