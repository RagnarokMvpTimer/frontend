import { styled } from '@linaria/react';
import { Search, ArrowUp, ArrowDown, XCircle } from '@styled-icons/feather';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  gap: 16px;

  @media (max-width: ${650 / 16}em) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;
  border-radius: 8px;
  background-color: var(--filterSearch_bg);
  border: 1px solid var(--filterSearch_border);

  &:focus-within {
    border-color: var(--filterSearch_border_focus);
  }
`;

export const SearchInput = styled.input`
  color: var(--filterSearch_text);
  font-size: 14px;
  background: none;
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  padding: 1px;
  color: var(--filterSearch_text);
  stroke-width: 2px;
`;

export const ClearButton = styled(XCircle)`
  width: 16px;
  height: 16px;
  stroke-width: 2px;
  color: var(--filterSearch_text);
  cursor: pointer;
`;

export const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  border-radius: 8px;
  background-color: var(--filterSearch_bg);
  border: 1px solid var(--filterSearch_border);

  @media (max-width: ${650 / 16}em) {
    width: 100%;
  }
`;

export const Reverse = styled.button`
  border-left: thin solid var(--filterSearch_text);
  margin: 5px 0;
  padding: 0 2px;
  background: none;
`;

export const UpArrow = styled(ArrowUp)`
  width: 24px;
  height: 24px;
  color: var(--filterSearch_text);
  stroke-width: 1.5px;
`;

export const DownArrow = styled(ArrowDown)`
  width: 24px;
  height: 24px;
  color: var(--filterSearch_text);
  stroke-width: 1.5px;
`;
