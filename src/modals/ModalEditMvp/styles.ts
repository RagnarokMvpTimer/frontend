import { ModalPrimaryButton } from '@/ui/ModalPrimaryButton';
import { styled } from '@linaria/react';

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

  background-color: var(--modal_bg);

  @media (max-width: ${1000 / 16}em) {
    width: 100%;
    height: 100%;
    max-height: 100vh;
  }
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
  color: var(--modal_name);
  margin-top: -25px;

  font-size: 2.4rem;
  font-weight: 600;
`;

export const Question = styled.span`
  color: var(---modal_text);

  font-size: 1.8rem;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Optional = styled.span`
  color: var(---modal_text);
  font-size: 1.2rem;
`;

export const DateTimePicker = styled.input`
  text-align: center;
  font-size: 1.7rem;
  border-radius: 4px;
  border: 1px solid var(--modal_datePicker_border);
`;

export const Footer = styled.footer`
  display: flex;
  max-width: 100%;
  gap: 2rem;

  @media (max-width: ${1000 / 16}em) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ChangeMapButton = styled(ModalPrimaryButton)`
  font-weight: 500;
  background-color: transparent;
  border: 3px solid var(--modal_changeMap_border);
  color: var(--modal_changeMap_text);
`;
