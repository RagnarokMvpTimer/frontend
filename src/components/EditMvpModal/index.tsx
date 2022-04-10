import { useContext, useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import DatePicker from 'react-datepicker';
import { X } from '@styled-icons/feather';

import 'react-datepicker/dist/react-datepicker.css';

import { MvpsContext } from '../../contexts/MvpsContext';
import { Mvp, IMapMark } from '../../interfaces';
import { getMapImg, getMvpSprite } from '../../utils';

import { MapMark } from '../MapMark';

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
  const [selectedMap, setSelectedMap] = useState<string>(mvp.deathMap || '');
  const [markCoordinates, setMarkCoordinates] = useState<IMapMark>({
    x: -1,
    y: -1,
  });

  const canChangeMap = !mvp.deathMap;
  const hasMoreThanOneMap = mvp.spawn.length > 1;

  function handleConfirm() {
    if (!selectedMap) return;
  }

  function mapMark(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { offsetX, offsetY } = e.nativeEvent;
    setMarkCoordinates({
      x: offsetX,
      y: offsetY,
    });
  }

  useEffect(() => {
    if (!hasMoreThanOneMap) setSelectedMap(mvp.spawn[0].mapname);
  }, [hasMoreThanOneMap, mvp.spawn]);

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
                    <option disabled value=''>
                      Select the map
                    </option>
                  )}

                  {mvp.spawn.map((map) => (
                    <option key={map.mapname} value={map.mapname}>
                      {map.mapname} -{' '}
                      {moment.duration(map.respawnTime).asHours()}h
                    </option>
                  ))}
                </>
              ) : (
                <option>{mvp.spawn[0].mapname}</option>
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
            <div>
              <Map
                src={getMapImg(selectedMap)}
                alt={selectedMap}
                //title={selectedMap}
                onClick={mapMark}
              />
              {(markCoordinates.x !== -1 || markCoordinates.y !== -1) && (
                <MapMark x={markCoordinates.x} y={markCoordinates.y} />
              )}
            </div>
          </>
        )}

        <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
      </Modal>
    </Container>
  );
}
