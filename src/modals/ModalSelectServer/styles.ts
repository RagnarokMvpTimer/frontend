import { styled } from '@linaria/react';

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

  @media (max-width: ${1000 / 16}em) {
    overflow-y: auto;
    max-height: 95vh;
  }
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ServerItem = styled.button<{
  active: boolean;
}>`
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;

  border: 1px solid var(--modal_serverSelect_border);

  background-color: ${({ active }) =>
    active
      ? 'var(--modal_serverSelect_bgActive)'
      : 'var(--modal_serverSelect_bg)'};

  color: ${({ active }) =>
    active
      ? 'var(--modal_serverSelect_textActive)'
      : 'var(--modal_serverSelect_text)'};

  &:hover {
    opacity: 0.8;
  }
`;
