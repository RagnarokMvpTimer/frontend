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

export function Map({ mapName, coordinates, onChange }: MapProps) {
  const [markCoordinates, setMarkCoordinates] = useState<IMapMark>(
    coordinates || { x: -1, y: -1 }
  );

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
