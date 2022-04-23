import { useState, useEffect } from 'react';

import { IMapMark } from '../../interfaces';
import { getMapImg } from '../../utils';
import { MapMark } from '../MapMark';

import { MapImg } from './styles';

interface MapProps {
  mapName: string;
  onChange?: (x: IMapMark) => void;
  coordinates?: IMapMark;
}

const defaultCoordinates: IMapMark = {
  x: -1,
  y: -1,
};

export function Map({
  mapName,
  onChange,
  coordinates = defaultCoordinates,
}: MapProps) {
  const [markCoordinates, setMarkCoordinates] = useState<IMapMark>(coordinates);

  function mapMark(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!onChange) return;

    const { offsetX, offsetY } = e.nativeEvent;
    setMarkCoordinates({
      x: offsetX,
      y: offsetY,
    });
  }

  useEffect(() => {
    if (!onChange || !markCoordinates) return;
    onChange(markCoordinates);
  }, [markCoordinates]);

  useEffect(() => {
    setMarkCoordinates(defaultCoordinates);
  }, [mapName]);

  return (
    <div>
      <MapImg
        src={getMapImg(mapName)}
        alt={mapName}
        onClick={mapMark}
        clickable={!!onChange}
      />
      {(markCoordinates.x !== -1 || markCoordinates.y !== -1) && (
        <MapMark x={markCoordinates.x} y={markCoordinates.y} />
      )}
    </div>
  );
}
