import styled, { css } from 'styled-components';
import { Globe } from '@styled-icons/feather';

import { phone } from '../../utils/media';

export const Container = styled.span`
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 4px;

    color: #fff;
    cursor: pointer;
  }

  ${phone(css`
    display: none;
  `)}
`;

export const Chevrons = styled.div`
  > svg {
    width: 14px;
    height: 14px;
    stroke-width: 3px;
  }
`;

export const GlobeLang = styled(Globe)`
  width: 16px;
  height: 16px;
  stroke-width: 2px;
`;

export const Picker = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

  position: absolute;
  flex-direction: column;
  right: 50px;
  margin-top: 10px;

  border-radius: 8px;
  border: 1px solid #1b1c1d;
  background-color: #262626;
  z-index: 1;

  cursor: none;
  pointer-events: none;
  list-style: none;
  overflow: auto;

  transition: all ease 0.3s;
`;

export const LangItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0.5em 1em;

  cursor: pointer;
  pointer-events: all;
  color: #fff;

  :hover {
    background-color: #ffa800;
  }
`;
