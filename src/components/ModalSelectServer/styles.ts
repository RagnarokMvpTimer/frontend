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

  background-color: ${({ theme }) => theme.colors.modal.bg};

  ${mobile(css`
    overflow-y: auto;
    max-height: 85vh;
  `)}
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.modal.name};
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
  background-color: ${({ theme, active }) =>
    active
      ? theme.colors.modal.serverSelect.bgActive
      : theme.colors.modal.serverSelect.bg};

  color: ${({ theme, active }) =>
    active
      ? theme.colors.modal.serverSelect.textActive
      : theme.colors.modal.serverSelect.text};
  font-weight: 600;

  padding: 1rem 2rem;

  border-radius: 0.5rem;
  ${({ theme }) =>
    theme.id === 'light' &&
    css`
      border: 1px solid #f89200;
    `}

  :hover {
    opacity: 0.8;
  }
`;
