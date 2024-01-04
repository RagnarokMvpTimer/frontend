import styled, { css } from 'styled-components';
import { mobile } from '../../utils/media';
import { ModalPrimaryButton } from '@/ui/ModalPrimaryButton';

export const Modal = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  max-height: 95vh;

  overflow-y: auto;

  padding: 2rem;
  gap: 8px;

  border-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.modal.bg};

  ${mobile(css`
    width: 100%;
    height: 100%;
    max-height: 100vh;
  `)}
`;

export const SpriteWrapper = styled.div`
  > img {
    width: auto;
    height: auto;
    max-width: 150px;
    max-height: 150px;
  }
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.modal.name};
  margin-top: -25px;

  font-size: 2.4rem;
  font-weight: 600;
`;

export const Question = styled.span`
  color: ${({ theme }) => theme.colors.modal.text};

  font-size: 1.8rem;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Optional = styled.span`
  color: ${({ theme }) => theme.colors.modal.text};
  font-size: 1.2rem;
`;

export const DateTimePicker = styled.input.attrs(() => ({
  type: 'datetime-local',
}))`
  text-align: center;
  font-size: 1.7rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.modal.datePicker.border};
`;

export const Footer = styled.footer`
  display: flex;
  max-width: 100%;
  gap: 2rem;

  ${mobile(css`
    flex-direction: column;
    gap: 1rem;
  `)}
`;

export const ChangeMapButton = styled(ModalPrimaryButton)`
  font-weight: 500;
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.colors.modal.changeMap.border};
  color: ${({ theme }) => theme.colors.modal.changeMap.text};
`;
