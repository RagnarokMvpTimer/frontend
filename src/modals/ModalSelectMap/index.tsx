import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Clock } from '@styled-icons/feather';
import dayjs from 'dayjs';

import { ModalCloseIconButton } from '@/ui/ModalCloseIconButton';
import { Map } from '@/components/Map';
import { ModalBase } from '../ModalBase';
import {
  Modal,
  Title,
  MapsDisplayGrid,
  MapCard,
  MapDetails,
  MapName,
  MapRespawnTime,
} from './styles';
import { ModalPrimaryButton } from '@/ui/ModalPrimaryButton';

type MapProps = {
  spawnMaps: ISpawn[];
  onSelect: (mapName: string) => void;
  onClose: () => void;
};

export function ModalSelectMap({ spawnMaps, onSelect, onClose }: MapProps) {
  const [selectedMap, setSelectedMap] = useState('');

  if (spawnMaps.length === 0) {
    return null;
  }

  return (
    <ModalBase>
      <Modal>
        <ModalCloseIconButton onClick={onClose} />

        <Title>
          <FormattedMessage id='please_select_map' />
        </Title>

        <MapsDisplayGrid cols={spawnMaps.length}>
          {spawnMaps.map(({ mapname, respawnTime }) => (
            <MapCard
              key={mapname}
              isSelected={mapname === selectedMap}
              onClick={() => setSelectedMap(mapname)}
            >
              <Map mapName={mapname} />

              <MapDetails>
                <MapName>{mapname}</MapName>

                <MapRespawnTime>
                  <Clock size={20} strokeWidth={3} />
                  <FormattedMessage id='every' />{' '}
                  {dayjs.duration(respawnTime, 'ms').humanize()}
                </MapRespawnTime>
              </MapDetails>
            </MapCard>
          ))}
        </MapsDisplayGrid>

        <ModalPrimaryButton
          onClick={() => onSelect(selectedMap)}
          disabled={!selectedMap}
        >
          <FormattedMessage id='confirm' />
        </ModalPrimaryButton>
      </Modal>
    </ModalBase>
  );
}
