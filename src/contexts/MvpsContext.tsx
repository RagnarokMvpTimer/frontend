import { createContext, useState, useEffect, ReactNode } from 'react';

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
  killMvp: (mvp: Mvp, time?: Date) => void;
  removeMvp: (mvp: Mvp) => void;

  setEditingMvp: (mvp: Mvp) => void;
  openAndEditModal: (mvp: Mvp) => void;
  toggleEditModal: () => void;
  toggleDeathMapModal: (mvp: Mvp) => void;
}

export const MvpsContext = createContext({} as MvpsContextData);

export function MvpProvider({ children, ...rest }: MvpProviderProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingMvp, setEditingMvp] = useState<Mvp>({} as Mvp);

  const [respawnAsCountdown, setRespawnAsCountdown] = useState(false);

  const [activeMvps, setActiveMvps] = useState<Array<Mvp>>([]);
  const [allMvps, setAllMvps] = useState<Array<Mvp>>(
    mvpsData.sort((a, b) => a.stats.level - b.stats.level)
  );

  function resetMvpTimer(mvp: Mvp) {
    const newMvp = { ...mvp, deathTime: new Date() };
    setAllMvps(allMvps.map((m) => (m.id === mvp.id ? newMvp : m)));
  }

  function removeMvp(mvp: Mvp) {
    setActiveMvps(activeMvps.filter((m) => m.deathMap !== mvp.deathMap));
  }

  function killMvp(mvp: Mvp, time?: Date) {
    const killedMvp = {
      ...mvp,
      deathTime: time ? time : new Date(),
      deathMap: mvp.spawn[0].mapname,
    };
    setActiveMvps([...activeMvps, killedMvp]);
  }

  function respawnNotification(mvp: Mvp) {
    new Audio('./notification1.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification(`${mvp.name} will respawn soon...`, {
        body: `At ${mvp.deathTime?.toLocaleTimeString()}`,
      });
    }
  }

  const toggleEditModal = () => setIsEditModalOpen((prev) => !prev);

  function openAndEditModal(mvp: Mvp) {
    setEditingMvp(mvp);
    toggleEditModal();
  }

  function toggleDeathMapModal(mvp: Mvp) {}

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
        toggleDeathMapModal,
      }}
    >
      {children}
      {isEditModalOpen && <EditMvpModal mvp={editingMvp} />}
    </MvpsContext.Provider>
  );
}
