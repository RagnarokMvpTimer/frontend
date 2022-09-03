import styled, { css } from 'styled-components';
import { Search, ArrowUp, ArrowDown } from '@styled-icons/feather';
import { phone } from '../../utils/media';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  ${phone(css`
    flex-direction: column;
    align-items: center;
  `)}
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
  gap: 4px;
  border-radius: 8px;
  background-color: #262626;
  border: 1px solid #1b1c1d;
`;

export const SearchInput = styled.input`
  color: white;
  font-size: 14px;
  background: none;
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  margin: 0 4px;
  padding: 1px;
  color: white;
  stroke-width: 2px;
`;

export const SortContainer = styled.div`
  display: flex;
  gap: 4px;
  border-radius: 8px;
  background-color: #262626;
  border: 1px solid #1b1c1d;

  ${phone(css`
    width: fit-content;
  `)}
`;

export const Reverse = styled.button`
  border-left: thin solid white;
  margin: 5px 0;
  padding: 0 2px;
  background: none;
`;

export const UpArrow = styled(ArrowUp)`
  width: 24px;
  height: 24px;
  color: white;
  stroke-width: 1.5px;
`;

export const DownArrow = styled(ArrowDown)`
  width: 24px;
  height: 24px;
  color: white;
  stroke-width: 1.5px;
`;
