import styled from 'styled-components';

export const Button = styled.button`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.headerTexts};
  background: none;

  :hover {
    opacity: 0.8;
  }
`;
