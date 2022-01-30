import { useContext, useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import DatePicker from 'react-datepicker';
import { X } from '@styled-icons/feather';

import 'react-datepicker/dist/react-datepicker.css';

import { MvpsContext } from '../../contexts/MvpsContext';
import { Mvp } from '../../interfaces';
import { getMapImg, getMvpSprite } from '../../utils';

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
  Map,
  ConfirmButton,
} from './styles';

interface EditMvpModalProps {
  mvp: Mvp;
}

export function EditMvpModal({ mvp }: EditMvpModalProps) {
  const { toggleEditModal, killMvp } = useContext(MvpsContext);

  const [newTime, setNewTime] = useState<Date | null>(
    mvp.deathTime || new Date()
  );
  const [selectedMap, setSelectedMap] = useState<string | undefined>(
    mvp.deathMap
  );

  const canChangeMap = mvp.deathMap === null;
  const hasMoreThanOneMap = mvp.maps.length > 1;

  useEffect(() => {
    if (!hasMoreThanOneMap) setSelectedMap(mvp.maps[0].mapName);
  }, [hasMoreThanOneMap, mvp.maps]);

  function handleConfirm() {}

  return (
    <Container>
      <Modal>
        <CloseButton onClick={toggleEditModal}>
          <X size={20} />
        </CloseButton>

        <Sprite src={getMvpSprite(mvp.id)} />
        <Name>{mvp.name}</Name>

        <Question>When was the mvp killed?</Question>
        <Time>At {newTime && moment(newTime).format('HH:mm')}</Time>

        <DatePickerContainer>
          <DatePicker
            selected={newTime}
            onChange={(date) => setNewTime(date)}
            showTimeInput
            placeholderText='Select mvp death time'
            withPortal
          />
        </DatePickerContainer>

        {!canChangeMap && hasMoreThanOneMap && (
          <>
            <Question>Please select the map</Question>
            <SelectMap
              value={selectedMap}
              onChange={(e) => setSelectedMap(e.target.value)}
            >
              {hasMoreThanOneMap ? (
                <>
                  <option>Select the map</option>
                  {mvp.maps.map((map) => (
                    <option key={map.mapName} value={map.mapName}>
                      {map.mapName} -{' '}
                      {moment.duration(map.respawnTime).asHours()}h
                    </option>
                  ))}
                </>
              ) : (
                <option>{mvp.maps[0].mapName}</option>
              )}
            </SelectMap>
          </>
        )}

        {selectedMap && (
          <>
            <Question>
              Where's mvp tombstone:
              <Optional>(optional)</Optional>
            </Question>
            <Map src={'http://via.placeholder.com/250'} alt={mvp.deathMap} />
          </>
        )}

        <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
      </Modal>
    </Container>
  );
}
