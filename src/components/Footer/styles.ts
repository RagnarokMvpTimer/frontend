import styled, { css } from 'styled-components';
import { mobile, phone, tablet } from '../../utils/media';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  margin: 15px auto;
`;

export const Text = styled.span`
  display: flex;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;

  font-weight: 500;

  color: ${({ theme }) => theme.colors.footer.text};
`;

export const Bold = styled.span`
  font-weight: 500;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.footer.link};

  > svg {
    stroke-width: 3px;
  }
`;
