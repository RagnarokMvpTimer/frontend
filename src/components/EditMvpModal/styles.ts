import styled from 'styled-components';

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
  max-width: 500px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
`;
