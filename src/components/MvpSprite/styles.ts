import styled, { css } from 'styled-components';

interface SpriteProps {
  isAnimated?: boolean;
}

export const Sprite = styled.img<SpriteProps>`
  width: auto;
  height: 100px;
  margin-top: 8px;

  ${({ isAnimated }) =>
    !isAnimated &&
    css`
      border-top-left-radius: 25px;
    `}
`;
