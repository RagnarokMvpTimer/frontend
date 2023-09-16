import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import moment from 'moment';

import { getMvpRespawnTime } from '../utils';
import { EditMvpModal } from '../components/EditMvpModal';
import mvpsData from '../data/data.json';

interface MvpProviderProps {
  children: ReactNode;
}

interface MvpsContextData {
  activeMvps: Array<IMvp>;
  allMvps: Array<IMvp>;
  editingMvp: IMvp;
  resetMvpTimer: (mvp: IMvp) => void;
  killMvp: (mvp: IMvp, time?: Date | null) => void;
  removeMvp: (mvp: IMvp) => void;
  setEditingMvp: (mvp: IMvp) => void;
  openAndEditModal: (mvp: IMvp) => void;
  toggleEditModal: () => void;
  clearActiveMvps: () => void;
}

export const MvpsContext = createContext({} as MvpsContextData);

export function MvpProvider({ children }: MvpProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingMvp, setEditingMvp] = useState<IMvp>({} as IMvp);
  const [activeMvps, setActiveMvps] = useState<Array<IMvp>>([]);
  const [allMvps, setAllMvps] = useState<Array<IMvp>>(
    mvpsData.sort((a, b) => a.stats.level - b.stats.level)
  );

  const toggleEditModal = useCallback(
    () => setIsEditModalOpen((prev) => !prev),
    []
  );

  const resetMvpTimer = useCallback((mvp: IMvp) => {
    const updatedMvp = { ...mvp, deathTime: new Date() };
    setActiveMvps((state) =>
      state.map((m) => (m.deathMap === mvp.deathMap ? updatedMvp : m))
    );
  }, []);

  const removeMvp = useCallback(
    (mvp: IMvp) =>
      setActiveMvps((state) =>
        state.filter((m) => m.deathMap !== mvp.deathMap)
      ),
    []
  );

  const killMvp = useCallback((mvp: IMvp, time?: Date | null) => {
    const killedMvp = {
      ...mvp,
      deathTime: time || new Date(),
    };

    setActiveMvps((s) =>
      [...s, killedMvp].sort((a: IMvp, b: IMvp) =>
        a.deathTime && b.deathTime
          ? moment(a.deathTime)
              .add(getMvpRespawnTime(a), 'ms')
              .diff(moment(b.deathTime).add(getMvpRespawnTime(b), 'ms'))
          : 0
      )
    );
  }, []);

  /* function respawnNotification(mvp: IMvp) {
    new Audio('./notification1.mp3').play();

    if (Notification.permission !== 'granted') return;
    new Notification(`${mvp.name} will respawn soon...`, {
      body: `At ${mvp.deathTime?.toLocaleTimeString()}`,
    });
  } */

  const openAndEditModal = useCallback(
    (mvp: IMvp) => {
      setEditingMvp(mvp);
      toggleEditModal();
    },
    [toggleEditModal]
  );

  const clearActiveMvps = useCallback(() => setActiveMvps([]), []);

  useEffect(() => {
    if (!isLoading) return;

    try {
      const data = localStorage.getItem('activeMvps');
      if (!data) return;

      const dataParse = JSON.parse(data);
      if (!dataParse) return;

      const finalData = dataParse.map((mvp: IMvp) => ({
        ...mvpsData.find((m) => m.id === mvp.id),
        deathMap: mvp.deathMap,
        deathPosition: mvp.deathPosition,
        deathTime: moment(mvp.deathTime).toDate(),
      }));

      setActiveMvps(finalData);
    } catch (error) {
      console.error(error);
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
        resetMvpTimer,
        killMvp,
        removeMvp,
        toggleEditModal,
        editingMvp,
        setEditingMvp,
        openAndEditModal,
        clearActiveMvps,
      }}
    >
      {children}
      {isEditModalOpen && <EditMvpModal />}
    </MvpsContext.Provider>
  );
}

export function useMvpsContext() {
  const context = useContext(MvpsContext);
  if (!context) {
    throw new Error('useMvpsContext must be used within a MvpProvider');
  }
  return context;
}
