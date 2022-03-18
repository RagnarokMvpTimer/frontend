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

  background-color: ${({ theme }) => theme.colors.modal.bg};
`;

export const Map = styled.img``;

export const CloseButton = styled.button`
  width: 150px;
  height: 50px;

  font-weight: 600;
  font-size: 18px;
  border-radius: 8px;

  color: white;
  background-color: #ffa800;
`;
