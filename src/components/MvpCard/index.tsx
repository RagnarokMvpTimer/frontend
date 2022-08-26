import { useContext, useState } from 'react';
import { Map, RefreshCcw, Trash2 } from '@styled-icons/feather';
import moment from 'moment';

import { MvpSprite } from '../MvpSprite';
import { MvpMapModal } from '../MvpMapModal';
import { MvpCardCountdown } from '../MvpCardCountdown';

import { Mvp } from '../../interfaces';
import { MvpsContext } from '../../contexts/MvpsContext';
import { SettingsContext } from '../../contexts/SettingsContext';
import { getMvpRespawnTime, respawnAt } from '../../utils';

import {
  Container,
  Name,
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
  const { killMvp, resetMvpTimer, removeMvp, openAndEditModal } =
    useContext(MvpsContext);
  const { respawnAsCountdown } = useContext(SettingsContext);
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);

  const hasMoreThanOneMap = mvp.spawn.length > 1;
  const nextRespawn = moment(mvp.deathTime).add(getMvpRespawnTime(mvp), 'ms');
  const respawnTime = respawnAt(nextRespawn);

  function handleKilledNow() {
    mvp.deathMap
      ? killMvp(mvp)
      : hasMoreThanOneMap
      ? openAndEditModal(mvp)
      : killMvp({ ...mvp, deathMap: mvp.spawn[0].mapname });
  }

  return (
    <Container>
      <Name>{mvp.name}</Name>

      <MvpSprite mvp={mvp} />

      {isActive ? (
        <>
          <Respawn title={respawnTime}>
            {respawnAsCountdown ? (
              <MvpCardCountdown nextRespawn={nextRespawn} />
            ) : (
              <>
                Respawn at {'\n'}
                <Bold>{respawnTime}</Bold>
              </>
            )}
          </Respawn>

          <MapName>
            Map:{'\n'}
            <Bold>{mvp.deathMap}</Bold>
          </MapName>

          <Controls>
            <Control onClick={() => setIsMapModalOpen(true)} title='Show map'>
              <Map />
            </Control>
            <Control onClick={() => resetMvpTimer(mvp)} title='Reset timer'>
              <RefreshCcw />
            </Control>
            <Control onClick={() => removeMvp(mvp)} title='Remove this mvp'>
              <Trash2 />
            </Control>
          </Controls>
        </>
      ) : (
        <Controls isActive={!isActive}>
          <KilledNow onClick={handleKilledNow}>I killed now !</KilledNow>
          <EditButton onClick={() => openAndEditModal(mvp)}>Edit</EditButton>
        </Controls>
      )}

      {mvp.deathMap && isMapModalOpen && (
        <MvpMapModal
          deathMap={mvp.deathMap}
          deathPosition={mvp.deathPosition}
          close={() => setIsMapModalOpen(false)}
        />
      )}
    </Container>
  );
}
