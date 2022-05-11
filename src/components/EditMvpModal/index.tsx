import { useContext, useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import DatePicker from 'react-datepicker';
import { X } from '@styled-icons/feather';

import 'react-datepicker/dist/react-datepicker.css';

import { useScrollBlock } from '../../hooks/useScrollBlock';
import { MvpsContext } from '../../contexts/MvpsContext';
import { SettingsContext } from '../../contexts/SettingsContext';
import { IMapMark, Mvp } from '../../interfaces';
import { getMvpSprite, getAnimatedMvpSprite } from '../../utils';
import { Map } from '../Map';

import {
  Container,
  Modal,
  CloseButton,
  Sprite,
  Name,
  Question,
  Optional,
  Time,
  DatePickerContainer,
  SelectMap,
  SelectMapOption,
  ConfirmButton,
} from './styles';

interface EditMvpModalProps {
  mvp: Mvp;
}

export function EditMvpModal({ mvp }: EditMvpModalProps) {
  useScrollBlock(true);
  const { toggleEditModal, killMvp } = useContext(MvpsContext);
  const { animatedSprites } = useContext(SettingsContext);

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

    const updatedMvp: Mvp = {
      ...mvp,
      deathMap: selectedMap,
      deathPosition: markCoordinates,
    };

    killMvp(updatedMvp, newTime);
    toggleEditModal();
  }

  useEffect(() => {
    if (!hasMoreThanOneMap) setSelectedMap(mvp.spawn[0].mapname);
  }, [hasMoreThanOneMap, mvp.spawn]);

  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggleEditModal();
    };
    document.addEventListener('keydown', handleClose);
    return () => document.removeEventListener('keydown', handleClose);
  }, []);

  return (
    <Container>
      <Modal>
        <CloseButton onClick={toggleEditModal}>
          <X size={20} />
        </CloseButton>

        <Name>{mvp.name}</Name>
        <Sprite
          src={
            animatedSprites
              ? getAnimatedMvpSprite(mvp.id)
              : getMvpSprite(mvp.id)
          }
        />

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
    </Container>
  );
}
