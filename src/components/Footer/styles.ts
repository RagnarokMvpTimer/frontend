import styled, { css } from 'styled-components';
import { mobile, phone, tablet } from '../../utils/media';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 150px;

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

  color: ${({ theme }) => theme.colors.text};
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
  color: #ffa800;
`;
