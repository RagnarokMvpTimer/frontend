import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 1rem;
  padding: 2rem 0;
  border-radius: 6px;
  margin: 0 1rem;

  background-color: ${({ theme }) => theme.colors.modal.bg};
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.modal.text};
  font-weight: bold;
  font-size: 1.8rem;
`;

export const NavCommand = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  color: ${({ theme }) => theme.colors.modal.text};
  border: 1px solid ${({ theme }) => theme.colors.modal.hl};
  border-radius: 0.6rem;
  padding: 0.6rem;

  font-size: 1.6rem;
  cursor: pointer;
  background: none;

  > svg {
    width: 1.8rem;
    height: 1.8rem;
    stroke-width: 2px;
  }

  :disabled {
    cursor: not-allowed;
    > svg {
      margin-top: 1px;
    }
  }

  :hover {
    opacity: 0.8;
  }
`;

export const Warning = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 3rem;

  color: ${({ theme }) => theme.colors.modal.text};
  font-weight: bold;
  font-size: 1.4rem;
`;

export const CloseButton = styled.button`
  width: 15rem;
  height: 5rem;

  font-weight: 600;
  font-size: 1.8rem;
  border-radius: 0.8rem;

  color: white;
  background-color: ${({ theme }) => theme.colors.modal.button};

  :hover {
    opacity: 0.8;
  }
`;
