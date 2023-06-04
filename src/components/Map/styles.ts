import styled, { css } from 'styled-components';
import { mobile } from '../../utils/media';

interface MapImgProps {
  clickable: boolean;
}

export const MapImg = styled.img<MapImgProps>`
  width: 25rem;
  height: 25rem;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;
