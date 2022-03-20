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

  function getMvpRespawnTime() {
    const deathMap = mvp.spawn.find((spawn) => spawn.mapname === mvp.deathMap);
    const respawnTime = deathMap?.respawnTime;
    if (respawnTime) {
      return respawnTime;
    }
  }

  useEffect(() => {
    if (mvp.deathTime && mvp.deathMap) {
      const time = respawnAt(
        moment(mvp.deathTime).add(getMvpRespawnTime(), 'ms')
      );
      setRespawnTime(time);
    }
  }, []);

  return (
    <Container>
      <Name>{mvp.name}</Name>
      <Sprite src={getMvpSprite(mvp.id)} alt={mvp.name} />
      {isActive ? (
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
      ) : (
        <Controls isActive={!isActive}>
          <KilledNow onClick={() => killMvp(mvp)}>I killed now !</KilledNow>
          <EditButton onClick={() => openAndEditModal(mvp)}>Edit</EditButton>
        </Controls>
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
