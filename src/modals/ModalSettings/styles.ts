import styled, { css } from 'styled-components';
import { mobile } from '../../utils/media';

export const Modal = styled.div`
  width: 100%;
  max-width: 500px;

  padding: 1.6rem;
  padding-bottom: 2.4rem;
  margin: 0 1rem;
  gap: 2rem;

  border-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: var(--modal_bg);

  ${mobile(css`
    overflow-y: auto;
    max-height: 85vh;
  `)}
`;

export const Title = styled.span`
  color: var(--modal_name);
  margin-top: -4rem;

  font-size: 2.4rem;
  font-weight: 600;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3rem;
  padding: 0 2rem;
`;

export const Setting = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SettingName = styled.span`
  color: var(---modal_text);

  font-size: 1.8rem;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SettingSecondary = styled(Setting)`
  width: auto;
  flex-direction: column;
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
    color: var(---modal_text);
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
