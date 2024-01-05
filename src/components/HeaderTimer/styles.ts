import styled from 'styled-components';

export const Hour = styled.span`
  font-size: 2.4rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: 1 / 2 / 2 / 3;

  text-align: center;

  color: ${({ theme }) => theme.colors.headerTexts};
`;
