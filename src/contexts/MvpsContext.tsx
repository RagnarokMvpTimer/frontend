import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import dayjs from 'dayjs';

import { useSettings } from './SettingsContext';

import { getMvpRespawnTime, getServers } from '../utils';
import { LOCAL_STORAGE_ACTIVE_MVPS_KEY } from '../constants';
const SERVERS = getServers();

interface MvpProviderProps {
  children: ReactNode;
}

interface MvpsContextData {
  activeMvps: IMvp[];
  allMvps: IMvp[];
  editingMvp: IMvp | undefined;
  resetMvpTimer: (mvp: IMvp) => void;
  killMvp: (mvp: IMvp, time?: Date | null) => void;
  removeMvp: (mvp: IMvp) => void;
  setEditingMvp: (mvp: IMvp) => void;
  closeEditMvpModal: () => void;
  clearActiveMvps: () => void;
}

export const MvpsContext = createContext({} as MvpsContextData);

export function MvpProvider({ children }: MvpProviderProps) {
  const { server } = useSettings();
  const mvpsData = SERVERS[server];

  const [isLoading, setIsLoading] = useState(true);
  const [editingMvp, setEditingMvp] = useState<IMvp>();
  const [activeMvps, setActiveMvps] = useState<IMvp[]>([]);
  const [allMvps, setAllMvps] = useState<IMvp[]>(mvpsData);

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
          ? dayjs(a.deathTime)
              .add(getMvpRespawnTime(a), 'ms')
              .diff(dayjs(b.deathTime).add(getMvpRespawnTime(b), 'ms'))
          : 0
      )
    );
  }, []);

  const closeEditMvpModal = useCallback(() => setEditingMvp(undefined), []);

  const clearActiveMvps = useCallback(() => setActiveMvps([]), []);

  useEffect(() => {
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_ACTIVE_MVPS_KEY);
      if (!data) return;

      const dataParse = JSON.parse(data);
      if (!dataParse) return;

      const savedServerData = dataParse[server];

      const hasSavedServerData = !!savedServerData;
      if (!hasSavedServerData) {
        setActiveMvps([]);
        return;
      }

      const finalData = savedServerData.map((mvp: IMvp) => ({
        ...SERVERS[server].find((m) => m.id === mvp.id),
        deathMap: mvp.deathMap,
        deathPosition: mvp.deathPosition,
        deathTime: dayjs(mvp.deathTime).toDate(),
      }));

      setActiveMvps(finalData);
    } catch (error) {
      console.error('Failed to load mvps from local storage', error);
    } finally {
      setIsLoading(false);
    }
  }, [server, mvpsData]);

  useEffect(() => {
    if (isLoading) return;

    const data = activeMvps.map((mvp) => ({
      id: mvp.id,
      deathMap: mvp.deathMap,
      deathTime: mvp.deathTime,
      deathPosition: mvp.deathPosition,
    }));

    const currentLocalMvps = localStorage.getItem(
      LOCAL_STORAGE_ACTIVE_MVPS_KEY
    );
    const currentData = currentLocalMvps ? JSON.parse(currentLocalMvps) : {};

    const updatedActiveData = {
      ...currentData,
      [server]: data,
    };

    Object.keys(updatedActiveData).forEach(
      (key) => !isNaN(Number(key)) && delete updatedActiveData[key]
    );

    localStorage.setItem(
      LOCAL_STORAGE_ACTIVE_MVPS_KEY,
      JSON.stringify(updatedActiveData)
    );
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
  }, [activeMvps, mvpsData]);

  useEffect(() => {
    if (Notification.permission === 'granted') return;
    Notification.requestPermission();
  }, []);

  return (
    <MvpsContext.Provider
      value={{
        activeMvps,
        allMvps,
        editingMvp,
        resetMvpTimer,
        killMvp,
        removeMvp,
        setEditingMvp,
        closeEditMvpModal,
        clearActiveMvps,
      }}
    >
      {children}
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
