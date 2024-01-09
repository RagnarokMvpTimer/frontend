import styled, { css } from 'styled-components';
import { mobile, phone, tablet } from '../../utils/media';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;

  background-color: var(--primary);
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

  color: var(--footer_text);
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
  color: var(--footer_link);

  > svg {
    stroke-width: 3px;
  }
`;
