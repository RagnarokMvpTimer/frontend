import styled, { css } from 'styled-components';
import { Globe } from '@styled-icons/feather';

export const Container = styled.span`
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 4px;

    color: ${({ theme }) => theme.colors.modal.text};
    cursor: pointer;
  }
`;

export const CurrentLanguage = styled.span`
  font-weight: 500;
`;

export const Chevrons = styled.div`
  > svg {
    width: 18px;
    height: 18px;
    stroke-width: 2px;
  }
`;

export const GlobeLang = styled(Globe)`
  width: 16px;
  height: 16px;
  stroke-width: 2px;
`;

export const Picker = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

  position: relative;
  flex-direction: column;
  margin-top: 10px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.languagePicker.border};
  background-color: ${({ theme }) => theme.colors.languagePicker.bg};
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

  color: ${({ theme }) => theme.colors.languagePicker.text};
  font-weight: 600;

  :hover {
    background-color: #ffa800;
  }
`;
