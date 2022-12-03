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
  background-color: ${({ theme }) => theme.colors.filterSearch.bg};
  border: 1px solid ${({ theme }) => theme.colors.filterSearch.border};
`;

export const SearchInput = styled.input`
  color: ${({ theme }) => theme.colors.filterSearch.text};
  font-size: 14px;
  background: none;
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  margin: 0 4px;
  padding: 1px;
  color: ${({ theme }) => theme.colors.filterSearch.text};
  stroke-width: 2px;
`;

export const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.filterSearch.bg};
  border: 1px solid ${({ theme }) => theme.colors.filterSearch.border};

  ${phone(css`
    width: 100%;
  `)}
`;

export const Reverse = styled.button`
  border-left: thin solid ${({ theme }) => theme.colors.filterSearch.text};
  margin: 5px 0;
  padding: 0 2px;
  background: none;
`;

export const UpArrow = styled(ArrowUp)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.filterSearch.text};
  stroke-width: 1.5px;
`;

export const DownArrow = styled(ArrowDown)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.filterSearch.text};
  stroke-width: 1.5px;
`;
