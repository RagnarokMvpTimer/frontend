import { useMemo, useState } from 'react';
import { Map, RefreshCcw, Trash2, Edit2 } from '@styled-icons/feather';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';

import { MvpSprite } from '../MvpSprite';
import { MvpCardCountdown } from '../MvpCardCountdown';
import { ModalMvpMap } from '@/modals';

import { useNotification } from '@/hooks';

import { useMvpsContext } from '@/contexts/MvpsContext';
import { useSettings } from '@/contexts/SettingsContext';
import { getMvpRespawnTime } from '@/utils';
import { GetTranslateText } from '@/utils/GetTranslateText';

import {
  Container,
  Header,
  ID,
  Name,
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
  const { killMvp, resetMvpTimer, removeMvpByMap, setEditingMvp } =
    useMvpsContext();
  const { respawnAsCountdown, animatedSprites } = useSettings();
  const { respawnNotification } = useNotification();
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const isActive = !!mvp.deathMap;

  const nextRespawn = useMemo(
    () => dayjs(mvp.deathTime).add(getMvpRespawnTime(mvp), 'ms'),
    [mvp]
  );

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

        <MvpSprite id={mvp.id} name={mvp.name} animated={animatedSprites} />

        {isActive ? (
          <>
            <MvpCardCountdown
              nextRespawn={nextRespawn}
              respawnAsCountdown={respawnAsCountdown}
              onTriggerNotification={() =>
                respawnNotification(
                  mvp.id,
                  `${mvp.name} ${GetTranslateText('will_respawn')}`,
                  `${mvp.deathMap} - ${nextRespawn.format('HH:mm')}`
                )
              }
            />

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
              <Control
                onClick={() => removeMvpByMap(mvp.deathMap)}
                title='Remove this mvp'
              >
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
        <ModalMvpMap
          deathMap={mvp.deathMap}
          deathPosition={mvp.deathPosition}
          close={() => setIsMapModalOpen(false)}
        />
      )}
    </>
  );
}
