import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 10px;
  padding: 20px 0;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.modal.bg};
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.modal.text};
  font-weight: bold;
  font-size: 18px;
`;

export const NavCommand = styled.span`
  color: ${({ theme }) => theme.colors.modal.text};
  border: 1px solid ${({ theme }) => theme.colors.modal.hl};

  border-radius: 6px;
  padding: 5px;

  font-size: 16px;
  cursor: pointer;

  > svg {
    stroke-width: 2px;
  }
`;

export const CloseButton = styled.button`
  width: 150px;
  height: 50px;

  font-weight: 600;
  font-size: 18px;
  border-radius: 8px;

  color: white;
  background-color: #ffa800;
`;
