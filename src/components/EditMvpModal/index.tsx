import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { useScrollBlock, useKey } from '../../hooks';
import { MvpsContext } from '../../contexts/MvpsContext';

import { ModalBase } from '../ModalBase';
import { MvpSprite } from '../MvpSprite';
import { Map } from '../Map';
import { ModalCloseButton } from '../ModalCloseButton';

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
  ConfirmButton,
} from './styles';

export function EditMvpModal() {
  useScrollBlock(true);
  const { toggleEditModal, killMvp, editingMvp: mvp } = useContext(MvpsContext);

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
    toggleEditModal();
  }, [selectedMap, mvp, markCoordinates, killMvp, newTime, toggleEditModal]);

  useEffect(() => {
    if (!hasMoreThanOneMap) setSelectedMap(mvp.spawn[0].mapname);
  }, [hasMoreThanOneMap, mvp.spawn]);

  useKey('Escape', toggleEditModal);

  return (
    <ModalBase>
      <Modal>
        <ModalCloseButton onClick={toggleEditModal} />

        <Name>{mvp.name}</Name>

        <SpriteWrapper>
          <MvpSprite mvp={mvp} />
        </SpriteWrapper>

        <Question>When was the mvp killed?</Question>

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

        <Time>At {newTime && moment(newTime).format('HH:mm')}</Time>

        {canChangeMap && hasMoreThanOneMap && (
          <>
            <Question>Please select the map</Question>
            <SelectMap
              value={selectedMap}
              onChange={(e) => setSelectedMap(e.target.value)}
            >
              {hasMoreThanOneMap ? (
                <>
                  {!selectedMap && (
                    <SelectMapOption disabled value=''>
                      Select the map
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
              Where's mvp tombstone:
              <Optional>(optional - click to mark)</Optional>
            </Question>
            <Map mapName={selectedMap} onChange={setMarkCoordinates} />
          </>
        )}

        <ConfirmButton onClick={handleConfirm} disabled={!selectedMap}>
          Confirm
        </ConfirmButton>
      </Modal>
    </ModalBase>
  );
}
