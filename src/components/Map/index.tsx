import { useState, useEffect, useCallback } from 'react';

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

  const mapMark = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!onChange) return;

      const { offsetX, offsetY } = e.nativeEvent;
      const newCoords = {
        x: offsetX,
        y: offsetY,
      };
      setMarkCoordinates(newCoords);
      onChange(newCoords);
    },
    [onChange]
  );

  useEffect(() => {
    if (!onChange) return;
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
