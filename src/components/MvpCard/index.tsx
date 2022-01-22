import { useContext, useState, useEffect } from 'react';
import { Map, RefreshCcw, Trash2 } from '@styled-icons/feather';
import moment, { Moment } from 'moment';

import { Mvp } from '../../interfaces';
import { MvpsContext } from '../../contexts/MvpsContext';
import { respawnAt, respawnCountdown } from '../../utils';

import Question from '../../assets/question.gif';
import { mvpIcons } from '../../assets/mvp_icons';

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
    removeMvp,
    toggleEditModal,
    toggleDeathMapModal,
    respawnAsCountdown,
  } = useContext(MvpsContext);
  const [respawnTime, setRespawnTime] = useState<string>('');

  function timeUntilRespawn() {
    const deathTime = moment(mvp.deathTime);
    return respawnAsCountdown
      ? respawnCountdown(deathTime)
      : respawnAt(deathTime);
  }

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(
        () => setRespawnTime(timeUntilRespawn()),
        1000
      );
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Container>
      <Name>{mvp.name}</Name>
      <Sprite src={mvpIcons[mvp.id] || Question} alt={mvp.name} />
      {!isActive && (
        <Controls isActive={!isActive}>
          <KilledNow onClick={() => toggleEditModal(mvp)}>
            I killed now!
          </KilledNow>
          <EditButton>Edit</EditButton>
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
            <Control onClick={() => toggleDeathMapModal(mvp)}>
              <Map color='#fff' height={17} width={17} />
            </Control>
            <Control onClick={() => toggleEditModal(mvp)}>
              <RefreshCcw color='#fff' height={17} width={17} />
            </Control>
            <Control onClick={() => removeMvp(mvp)}>
              <Trash2 color='#fff' height={17} width={17} />
            </Control>
          </Controls>
        </>
      )}
    </Container>
  );
}
