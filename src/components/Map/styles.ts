import { styled } from '@linaria/react';

interface MapImgProps {
  clickable: boolean;
}

export const MapImg = styled.img<MapImgProps>`
  width: 25rem;
  height: 25rem;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;
