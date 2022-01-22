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
  killedNow: (mvp: Mvp) => void;
  removeMvp: (mvp: Mvp) => void;
  toggleEditModal: (mvp: Mvp) => void;
  toggleDeathMapModal: (mvp: Mvp) => void;
}

export const MvpsContext = createContext({} as MvpsContextData);

export function MvpProvider({ children, ...rest }: MvpProviderProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [respawnAsCountdown, setRespawnAsCountdown] = useState(true);

  const [activeMvps, setActiveMvps] = useState<Array<Mvp>>([]);
  const [allMvps, setAllMvps] = useState<Array<Mvp>>(
    mvpsData.sort((a, b) => a.stats.level - b.stats.level)
  );

  function resetMvpTimer(mvp: Mvp) {}

  function removeMvp(mvp: Mvp) {
    //setActiveMvps(activeMvps.filter((m) => m.deathMap !== mvp.deathMap));
  }

  function killedNow(mvp: Mvp) {
    /*let killedMvp = {
      ...mvp,
      deathTime: new Date(),
      deathMap: mvp.maps[0].mapName,
    };
    setActiveMvps([...activeMvps, killedMvp]);*/
  }

  function respawnNotification(mvp: Mvp) {
    new Audio('./notification1.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification(`${mvp.name} will respawn soon...`, {
        body: `At ${mvp.deathTime?.toLocaleTimeString()}`,
      });
    }
  }

  function toggleEditModal(mvp: Mvp) {
    //setIsEditModalOpen(!isEditModalOpen);
  }

  function toggleDeathMapModal(mvp: Mvp) {}

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  return (
    <MvpsContext.Provider
      value={{
        activeMvps,
        allMvps,
        respawnAsCountdown,
        resetMvpTimer,
        killedNow,
        removeMvp,
        toggleEditModal,
        toggleDeathMapModal,
      }}
    >
      {children}
      {isEditModalOpen && <EditMvpModal />}
    </MvpsContext.Provider>
  );
}
