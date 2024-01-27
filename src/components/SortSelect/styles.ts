import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  border-radius: 8px;
  color: var(--filterSearch_text);

  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  border: none;
  background: none;
  outline: none;
`;

export const Option = styled.option`
  font-size: 14px;
  font-weight: 500;

  color: var(--filterSearch_text);
  background-color: var(--filterSearch_bg);
`;
