import styled, { css } from 'styled-components';
import { mobile } from '../../utils/media';

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
  color: ${({ theme }) => theme.colors.modal.time};

  font-size: 18px;
  font-weight: 600;
`;

export const DatePickerContainer = styled.div`
  > div {
    > div {
      > input {
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
        border: 1px solid ${({ theme }) => theme.colors.modal.datePicker.border};
      }
    }
  }
`;

export const SelectMap = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.modal.mapSelect.border};
  border-radius: 4px;
  padding: 0 6px;

  font-weight: 500;
  font-size: 14px;

  background: #fff;
  outline: 0;
`;

export const SelectMapOption = styled.option``;
