import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.filterSearch.text};

  font-size: 14px;
  font-weight: 500;

  border: none;
  background: none;
  outline: none;
`;

export const Option = styled.option`
  font-size: 14px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.filterSearch.text};
  background-color: ${({ theme }) => theme.colors.filterSearch.bg};
`;
