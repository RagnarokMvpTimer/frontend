import styled, { css } from 'styled-components';
import { phone } from '../../utils/media';

export const Container = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 4px;

  color: #fff;
  cursor: pointer;

  > svg {
    stroke-width: 3px;
  }

  ${phone(css`
    display: none;
  `)}
`;
