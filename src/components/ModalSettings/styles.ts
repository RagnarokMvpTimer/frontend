import styled, { css } from 'styled-components';
import { mobile } from '../../utils/media';

export const Modal = styled.div`
  width: 100%;
  max-width: 300px;

  padding: 8px;
  gap: 8px;
  padding-bottom: 20px;

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
  margin-top: -25px;

  font-size: 24px;
  font-weight: 600;
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.modal.text};

  font-size: 16px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const Setting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  > svg {
    width: 20px;
    height: 20px;
    stroke-width: 2px;
    fill: white;
    color: ${({ theme }) => theme.colors.modal.text};
  }
`;

export const ClearButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  padding: 5px 15px;
  gap: 6px;

  border: 0;
  border-radius: 4px;

  font-size: 18px;
  font-weight: 500;
  color: #fff;

  background-color: #d10000;

  :hover {
    opacity: 0.8;
  }

  > svg {
    width: 16px;
    height: 16px;
    stroke-width: 3px;
    color: white;
  }
`;
