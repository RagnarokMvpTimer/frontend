import styled, { css } from 'styled-components';
import { mobile, tablet } from '../../utils/media';

export const Modal = styled.div`
  width: 100%;
  max-width: 400px;

  padding: 8px;
  gap: 8px;
  padding-bottom: 2rem;
  margin: 0 1rem;

  border-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: var(--modal_bg);

  ${mobile(css`
    overflow-y: auto;
    max-height: 95vh;
  `)}
`;

export const Title = styled.span`
  color: var(--modal_name);
  margin-top: -1rem;

  font-size: 24px;
  font-weight: 600;
`;

export const ServerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 1.6rem 0;

  ${tablet(css`
    grid-template-columns: repeat(2, 1fr);
  `)}
`;

export const ServerItem = styled.button<{
  active: boolean;
}>`
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;

  background-color: var(--modal_serverSelect_bg);
  color: var(--modal_serverSelect_text);
  border: 1px solid var(--modal_serverSelect_border);

  ${({ active }) =>
    active &&
    css`
      background-color: var(--modal_serverSelect_bgActive);
      color: var(--modal_serverSelect_textActive);
    `}

  :hover {
    opacity: 0.8;
  }
`;
