import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';

import 'react-datepicker/dist/react-datepicker.css';

import { useScrollBlock, useKey } from '@/hooks';
import { useMvpsContext } from '@/contexts/MvpsContext';

import { ModalBase } from '../ModalBase';
import { MvpSprite } from '../../components/MvpSprite';
import { Map } from '../../components/Map';
import { ModalSelectMap } from '../ModalSelectMap';

import { ModalCloseIconButton } from '@/ui/ModalCloseIconButton';
import { ModalPrimaryButton } from '@/ui/ModalPrimaryButton';

import {
  Modal,
  SpriteWrapper,
  Name,
  Question,
  Optional,
  DatePickerContainer,
  Footer,
  ChangeMapButton,
} from './styles';

export function ModalEditMvp() {
  useScrollBlock(true);
  const { killMvp, editingMvp: mvp, closeEditMvpModal } = useMvpsContext();

  const [newTime, setNewTime] = useState<Date | null>(
    mvp.deathTime || new Date()
  );
  const [selectedMap, setSelectedMap] = useState<string>(mvp.deathMap || '');
  const [markCoordinates, setMarkCoordinates] = useState<IMapMark>({
    x: -1,
    y: -1,
  });

  const canChangeMap = !mvp.deathMap;
  const hasMoreThanOneMap = mvp.spawn.length > 1;

  function handleConfirm() {
    if (!selectedMap) return;

    const updatedMvp: IMvp = {
      ...mvp,
      deathMap: selectedMap,
      deathPosition: markCoordinates,
    };

    killMvp(updatedMvp, newTime);
    closeEditMvpModal();
  }

  useEffect(() => {
    if (!hasMoreThanOneMap) setSelectedMap(mvp.spawn[0].mapname);
  }, [hasMoreThanOneMap, mvp.spawn]);

  useKey('Escape', closeEditMvpModal);

  if (canChangeMap && !selectedMap) {
    return (
      <ModalSelectMap
        spawnMaps={mvp.spawn}
        onSelect={setSelectedMap}
        onClose={closeEditMvpModal}
      />
    );
  }

  return (
    <ModalBase>
      <Modal>
        <ModalCloseIconButton onClick={closeEditMvpModal} />

        <Name>{mvp.name}</Name>

        <SpriteWrapper>
          <MvpSprite mvp={mvp} />
        </SpriteWrapper>

        <Question>
          <FormattedMessage id='when_was_killed' />
        </Question>

        <DatePickerContainer>
          <DatePicker
            selected={newTime}
            onChange={setNewTime}
            showTimeInput
            placeholderText='Select mvp death time'
            withPortal
            minDate={dayjs().subtract(4, 'days').toDate()}
            maxDate={dayjs().add(1, 'days').toDate()}
            dateFormat='dd/MM - HH:mm'
            shouldCloseOnSelect={false}
          />
        </DatePickerContainer>

        {selectedMap && (
          <>
            <Question>
              <FormattedMessage id='wheres_tombstone' />
              <Optional>
                (<FormattedMessage id='optional_mark' />)
              </Optional>
            </Question>
            <Map mapName={selectedMap} onChange={setMarkCoordinates} />
          </>
        )}

        <Footer>
          {hasMoreThanOneMap && (
            <ChangeMapButton size='lg' onClick={() => setSelectedMap('')}>
              <FormattedMessage id='change_map' />
            </ChangeMapButton>
          )}
          <ModalPrimaryButton
            size='lg'
            onClick={handleConfirm}
            disabled={!selectedMap}
          >
            <FormattedMessage id='confirm' />
          </ModalPrimaryButton>
        </Footer>
      </Modal>
    </ModalBase>
  );
}
