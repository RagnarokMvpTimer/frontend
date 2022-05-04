import styled, { css } from 'styled-components';
import { mobile } from '../../utils/media';

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

  padding: 8px;
  gap: 8px;

  border-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: column;
  //justify-content: center;

  background-color: ${({ theme }) => theme.colors.modal.bg};

  ${mobile(css``)}
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  color: ${({ theme }) => theme.colors.modal.text};
`;

export const Sprite = styled.img`
  width: auto;
  height: auto;
  max-width: 150px;
  max-height: 150px;
  border-top-left-radius: 30px;
`;

export const Name = styled.span`
  color: #ffa800;
  margin-top: -25px;

  font-size: 24px;
  font-weight: 600;
`;

export const Question = styled.span`
  color: ${({ theme }) => theme.colors.modal.text};

  font-size: 16px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Optional = styled.span`
  color: ${({ theme }) => theme.colors.modal.text};

  font-size: 12px;
`;

export const Time = styled.span`
  color: #ffa800;

  font-size: 18px;
  font-weight: 500;
`;

export const DatePickerContainer = styled.div`
  input {
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
`;

export const SelectMap = styled.select`
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0 6px;

  font-weight: 500;
  font-size: 14px;

  background: #fff;
  outline: 0;
`;

export const SelectMapOption = styled.option``;

export const ConfirmButton = styled.button`
  width: 250px;
  height: 50px;

  font-weight: 600;
  font-size: 18px;
  border-radius: 8px;

  color: white;
  background-color: #ffa800;

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
