import { useCallback, useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { FormattedMessage } from 'react-intl';

import 'react-datepicker/dist/react-datepicker.css';

import { useScrollBlock, useKey } from '../../hooks';
import { useMvpsContext } from '../../contexts/MvpsContext';

import { ModalBase } from '../ModalBase';
import { MvpSprite } from '../MvpSprite';
import { Map } from '../Map';

import { ModalCloseIconButton } from '../../ui/ModalCloseIconButton';
import { ModalPrimaryButton } from '../../ui/ModalPrimaryButton';

import {
  Modal,
  SpriteWrapper,
  Name,
  Question,
  Optional,
  Time,
  DatePickerContainer,
  SelectMap,
  SelectMapOption,
} from './styles';

export function EditMvpModal() {
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

  const canChangeMap = useMemo(() => !mvp.deathMap, [mvp.deathMap]);
  const hasMoreThanOneMap = useMemo(
    () => mvp.spawn.length > 1,
    [mvp.spawn.length]
  );

  const handleConfirm = useCallback(() => {
    if (!selectedMap) return;

    const updatedMvp: IMvp = {
      ...mvp,
      deathMap: selectedMap,
      deathPosition: markCoordinates,
    };

    killMvp(updatedMvp, newTime);
    closeEditMvpModal();
  }, [selectedMap, mvp, markCoordinates, killMvp, newTime, closeEditMvpModal]);

  useEffect(() => {
    if (!hasMoreThanOneMap) setSelectedMap(mvp.spawn[0].mapname);
  }, [hasMoreThanOneMap, mvp.spawn]);

  useKey('Escape', closeEditMvpModal);

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
            onChange={(date) => setNewTime(date)}
            showTimeInput
            placeholderText='Select mvp death time'
            withPortal
            minDate={moment().subtract(4, 'days').toDate()}
            maxDate={moment().add(1, 'days').toDate()}
          />
        </DatePickerContainer>

        <Time>
          <FormattedMessage id='at' />{' '}
          {newTime && moment(newTime).format('HH:mm')}
        </Time>

        {canChangeMap && hasMoreThanOneMap && (
          <>
            <Question>
              <FormattedMessage id='please_select_map' />
            </Question>
            <SelectMap
              value={selectedMap}
              onChange={(e) => setSelectedMap(e.target.value)}
            >
              {hasMoreThanOneMap ? (
                <>
                  {!selectedMap && (
                    <SelectMapOption disabled value=''>
                      <FormattedMessage id='select_the_map' />
                    </SelectMapOption>
                  )}

                  {mvp.spawn.map((map) => (
                    <SelectMapOption key={map.mapname} value={map.mapname}>
                      {map.mapname} -{' '}
                      {moment.duration(map.respawnTime).asHours()}h
                    </SelectMapOption>
                  ))}
                </>
              ) : (
                <SelectMapOption>{mvp.spawn[0].mapname}</SelectMapOption>
              )}
            </SelectMap>
          </>
        )}

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

        <ModalPrimaryButton
          size='lg'
          onClick={handleConfirm}
          disabled={!selectedMap}
        >
          <FormattedMessage id='confirm' />
        </ModalPrimaryButton>
      </Modal>
    </ModalBase>
  );
}
