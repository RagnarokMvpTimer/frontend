import { useContext, useState, useEffect } from 'react';
import { Map, RefreshCcw, Trash2 } from '@styled-icons/feather';
import moment, { Moment } from 'moment';

import { Mvp } from '../../interfaces';
import { MvpsContext } from '../../contexts/MvpsContext';
import { getMvpSprite, respawnAt, respawnCountdown } from '../../utils';

import { MvpMapModal } from '../MvpMapModal';

import {
  Container,
  Name,
  Sprite,
  Respawn,
  MapName,
  Controls,
  Control,
  Bold,
  KilledNow,
  EditButton,
} from './styles';

interface MvpCardProps {
  mvp: Mvp;
  isActive?: boolean;
}

export function MvpCard({ mvp, isActive = false }: MvpCardProps) {
  const {
    killMvp,
    resetMvpTimer,
    removeMvp,
    openAndEditModal,
    toggleDeathMapModal,
    respawnAsCountdown,
  } = useContext(MvpsContext);

  const [respawnTime, setRespawnTime] = useState<string>('');
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);

  useEffect(() => {
    function timeUntilRespawn() {
      const deathTime = moment(mvp.deathTime);
      return respawnAsCountdown
        ? respawnCountdown(deathTime)
        : respawnAt(deathTime);
    }

    if (isActive) {
      const interval = setInterval(
        () => setRespawnTime(timeUntilRespawn()),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [isActive, mvp.deathTime, respawnAsCountdown]);

  return (
    <Container>
      <Name>{mvp.name}</Name>
      <Sprite src={getMvpSprite(mvp.id)} alt={mvp.name} />
      {!isActive && (
        <Controls isActive={!isActive}>
          <KilledNow onClick={() => killMvp(mvp)}>I killed now !</KilledNow>
          <EditButton onClick={() => openAndEditModal(mvp)}>Edit</EditButton>
        </Controls>
      )}
      {isActive && (
        <>
          <Respawn>
            Respawn {respawnAsCountdown ? 'in' : 'at'}
            {'\n'}
            <Bold>{respawnTime}</Bold>
          </Respawn>
          <MapName>
            Map:{'\n'}
            <Bold>{mvp.deathMap}</Bold>
          </MapName>
          <Controls>
            <Control onClick={() => setIsMapModalOpen(true)}>
              <Map color='#fff' height={17} width={17} />
            </Control>
            <Control onClick={() => resetMvpTimer(mvp)}>
              <RefreshCcw color='#fff' height={17} width={17} />
            </Control>
            <Control onClick={() => removeMvp(mvp)}>
              <Trash2 color='#fff' height={17} width={17} />
            </Control>
          </Controls>
        </>
      )}

      {mvp.deathMap && isMapModalOpen && (
        <MvpMapModal
          deathMap={mvp.deathMap}
          close={() => setIsMapModalOpen(false)}
        />
      )}
    </Container>
  );
}
