import styled, { css } from 'styled-components';
import { mobile } from '../../utils/media';

interface MapImgProps {
  clickable: boolean;
}

export const MapImg = styled.img<MapImgProps>`
  width: 250px;
  height: 250px;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;
