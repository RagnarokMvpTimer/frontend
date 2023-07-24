import { useCallback, useContext, useMemo, useState } from 'react';
import { Map, RefreshCcw, Trash2, Edit2 } from '@styled-icons/feather';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import { MvpSprite } from '../MvpSprite';
import { MvpMapModal } from '../MvpMapModal';
import { MvpCardCountdown } from '../MvpCardCountdown';

import { MvpsContext } from '../../contexts/MvpsContext';
import { SettingsContext } from '../../contexts/SettingsContext';
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
  isActive?: boolean;
}

export function MvpCard({ mvp, isActive = false }: MvpCardProps) {
  const { killMvp, resetMvpTimer, removeMvp, openAndEditModal } =
    useContext(MvpsContext);
  const { respawnAsCountdown } = useContext(SettingsContext);
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);

  const hasMoreThanOneMap = useMemo(
    () => mvp.spawn.length > 1,
    [mvp.spawn.length]
  );

  const nextRespawn = useMemo(
    () => moment(mvp.deathTime).add(getMvpRespawnTime(mvp), 'ms'),
    [mvp]
  );

  const respawnTime = useMemo(() => respawnAt(nextRespawn), [nextRespawn]);

  const handleKilledNow = useCallback(() => {
    mvp.deathMap
      ? killMvp(mvp)
      : hasMoreThanOneMap
      ? openAndEditModal(mvp)
      : killMvp({ ...mvp, deathMap: mvp.spawn[0].mapname });
  }, [mvp, killMvp, hasMoreThanOneMap, openAndEditModal]);

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
            <EditButton onClick={() => openAndEditModal(mvp)}>
              <FormattedMessage id='edit' />
            </EditButton>
          </Controls>
        )}
      </Container>

      {mvp.deathMap && isMapModalOpen && (
        <MvpMapModal
          deathMap={mvp.deathMap}
          deathPosition={mvp.deathPosition}
          close={() => setIsMapModalOpen(false)}
        />
      )}
    </>
  );
}
