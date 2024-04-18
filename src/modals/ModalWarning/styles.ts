import { styled } from '@linaria/react';
import { AlertTriangle } from '@styled-icons/feather';

export const Modal = styled.div`
  width: 100%;
  max-width: 600px;

  padding: 2rem;
  gap: 8px;
  margin: 0 1rem;

  border-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: var(--modal_bg);

  @media (max-width: 768px) {
    max-width: 500px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Alert = styled.div`
  display: flex;
  width: 7rem;
  height: 7rem;
  aspect-ratio: 1;

  padding: 1.125rem;
  padding-bottom: 1.2rem;
  background-color: #d10000;
  border-radius: 50%;
`;

export const AlertIcon = styled(AlertTriangle)`
  width: 100%;
  height: 100%;
  color: #fff;
  stroke-width: 2px;
  margin-top: -2px;
`;

export const Title = styled.h3`
  font-weight: 600;
  color: var(--modal_name);
`;

export const Description = styled.p`
  font-weight: 500;
  color: var(---modal_text);
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap: 1rem;
`;

export const CancelButton = styled.button`
  color: #9ca394;
  background-color: transparent;

  border: 1px solid #9ca394;
  border-radius: 0.8rem;
  padding: 0.625rem 2rem;

  &:hover {
    color: #fff;
  }
`;

export const DeleteButton = styled.button`
  color: #fff;
  background-color: #d10000;
  border-radius: 0.8rem;

  padding: 0.625rem 2rem;
  font-size: 1.8rem;
  font-weight: 600;

  &:hover {
    background-color: #b91c1c;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
