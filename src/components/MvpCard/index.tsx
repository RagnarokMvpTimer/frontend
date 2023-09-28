import { useCallback, useMemo, useState } from 'react';
import { Map, RefreshCcw, Trash2, Edit2 } from '@styled-icons/feather';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import { MvpSprite } from '../MvpSprite';
import { MvpMapModal } from '../MvpMapModal';
import { MvpCardCountdown } from '../MvpCardCountdown';

import { useMvpsContext } from '../../contexts/MvpsContext';
import { useSettings } from '../../contexts/SettingsContext';
import { getMvpRespawnTime, respawnAt } from '../../utils';

import {
  Container,
  Header,
  ID,
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
  mvp: IMvp;
}

export function MvpCard({ mvp }: MvpCardProps) {
  const { killMvp, resetMvpTimer, removeMvp, setEditingMvp } = useMvpsContext();
  const { respawnAsCountdown } = useSettings();
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);

  const isActive = !!mvp.deathMap;

  const nextRespawn = useMemo(
    () => moment(mvp.deathTime).add(getMvpRespawnTime(mvp), 'ms'),
    [mvp]
  );

  const respawnTime = useMemo(() => respawnAt(nextRespawn), [nextRespawn]);

  function handleKilledNow() {
    const hasMoreThanOneMap = mvp.spawn.length > 1;

    isActive
      ? killMvp(mvp)
      : hasMoreThanOneMap
      ? setEditingMvp(mvp)
      : killMvp({ ...mvp, deathMap: mvp.spawn[0].mapname });
  }

  return (
    <>
      <Container>
        <Header>
          <ID>{`(${mvp.id})`}</ID>
          <Name>{mvp.name}</Name>
        </Header>

        <MvpSprite mvp={mvp} />

        {isActive ? (
          <>
            <Respawn title={respawnTime}>
              {respawnAsCountdown ? (
                <MvpCardCountdown nextRespawn={nextRespawn} />
              ) : (
                <>
                  <FormattedMessage id='respawn_at' /> {'\n'}
                  <Bold>{respawnTime}</Bold>
                </>
              )}
            </Respawn>

            <MapName>
              <FormattedMessage id='map' />
              {'\n'}
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
              {/* <Control
              onClick={() => openAndEditModal(mvp)}
              title='Edit this mvp'
            >
              <Edit2 />
            </Control> */}
            </Controls>
          </>
        ) : (
          <Controls isActive={!isActive}>
            <KilledNow onClick={handleKilledNow}>
              <FormattedMessage id='killed_now' />
            </KilledNow>
            <EditButton onClick={() => setEditingMvp(mvp)}>
              <FormattedMessage id='edit' />
            </EditButton>
          </Controls>
        )}
      </Container>

      {isActive && isMapModalOpen && (
        <MvpMapModal
          deathMap={mvp.deathMap}
          deathPosition={mvp.deathPosition}
          close={() => setIsMapModalOpen(false)}
        />
      )}
    </>
  );
}
