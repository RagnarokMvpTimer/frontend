import styled from 'styled-components';

import { IMapMark } from '../../interfaces';

interface Props {
  coordinates: IMapMark;
}

export const Container = styled.div<Props>`
  height: 0;
  width: 0;
  position: relative;
  top: ${({ coordinates }) => Number(coordinates.y) - 265}px;
  left: ${({ coordinates }) => Number(coordinates.x) - 10}px;
  pointer-events: none;
`;

export const Tomb = styled.img`
  width: 20px;
  height: 20px;
`;
