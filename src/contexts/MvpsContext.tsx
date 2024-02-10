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

import { getMvpRespawnTime, getServerData } from '../utils';
import {
  loadMvpsFromLocalStorage,
  saveActiveMvpsToLocalStorage,
} from '@/controllers/mvp';

interface MvpProviderProps {
  children: ReactNode;
}

interface MvpsContextData {
  activeMvps: IMvp[];
  allMvps: IMvp[];
  editingMvp: IMvp | undefined;
  resetMvpTimer: (mvp: IMvp) => void;
  killMvp: (mvp: IMvp, time?: Date | null) => void;
  removeMvpByMap: (deathMap: string) => void;
  setEditingMvp: (mvp: IMvp) => void;
  closeEditMvpModal: () => void;
  clearActiveMvps: () => void;
}

export const MvpsContext = createContext({} as MvpsContextData);

export function MvpProvider({ children }: MvpProviderProps) {
  const { server } = useSettings();

  const [isLoading, setIsLoading] = useState(true);
  const [editingMvp, setEditingMvp] = useState<IMvp>();
  const [activeMvps, setActiveMvps] = useState<IMvp[]>([]);
  const [allMvps, setAllMvps] = useState<IMvp[]>([]);

  const resetMvpTimer = useCallback((mvp: IMvp) => {
    const updatedMvp = { ...mvp, deathTime: new Date() };
    setActiveMvps((state) =>
      state.map((m) => (m.deathMap === mvp.deathMap ? updatedMvp : m))
    );
  }, []);

  const removeMvpByMap = useCallback(
    (deathMap: string) =>
      setActiveMvps((state) => state.filter((m) => m.deathMap !== deathMap)),
    []
  );

  const killMvp = useCallback((mvp: IMvp, deathTime = new Date()) => {
    const killedMvp = {
      ...mvp,
      deathTime,
    };

    setActiveMvps((s) =>
      [...s, killedMvp].sort((a: IMvp, b: IMvp) => {
        const bothHaveDeathTime = a.deathTime && b.deathTime;
        if (!bothHaveDeathTime) {
          return 0;
        }
        return dayjs(a.deathTime)
          .add(getMvpRespawnTime(a), 'ms')
          .diff(dayjs(b.deathTime).add(getMvpRespawnTime(b), 'ms'));
      })
    );
  }, []);

  const closeEditMvpModal = useCallback(() => setEditingMvp(undefined), []);

  const clearActiveMvps = useCallback(() => setActiveMvps([]), []);

  useEffect(() => {
    async function loadActiveMvps() {
      setIsLoading(true);
      const savedActiveMvps = await loadMvpsFromLocalStorage(server);
      setActiveMvps(savedActiveMvps || []);
      setIsLoading(false);
    }
    loadActiveMvps();
  }, [server]);

  useEffect(() => {
    if (isLoading) return;

    async function filterAllMvps() {
      const originalServerData = await getServerData(server);
      const activeSpawns = activeMvps.map((m) => m.deathMap);

      const filteredAllMvps = originalServerData
        .map((mvp) => ({
          ...mvp,
          spawn: mvp.spawn.filter(
            (spawn) => !activeSpawns.includes(spawn.mapname)
          ),
        }))
        .filter((mvp) => mvp.spawn.length > 0);

      setAllMvps(filteredAllMvps);
    }

    filterAllMvps();
    saveActiveMvpsToLocalStorage(activeMvps, server);
  }, [isLoading, activeMvps, server]);

  return (
    <MvpsContext.Provider
      value={{
        activeMvps,
        allMvps,
        editingMvp,
        resetMvpTimer,
        killMvp,
        removeMvpByMap,
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
