import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 220px;
  height: 300px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.mvpCard.bg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Sprite = styled.img<{ isAnimated?: boolean }>`
  width: auto;
  height: 100px;
  margin-top: 8px;

  ${({ isAnimated }) =>
    !isAnimated &&
    css`
      border-top-left-radius: 30px;
    `}
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Name = styled.span`
  font-weight: bold;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.mvpCard.name};
`;

export const Respawn = styled.span`
  text-align: center;
  white-space: pre-wrap;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.mvpCard.text};
`;

export const MapName = styled.span`
  text-align: center;
  white-space: pre-wrap;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.mvpCard.text};
`;

const ButtonStyle = css`
  width: 100%;
  padding: 5px 20px;

  border: 0;
  border-radius: 4px;

  font-size: 18px;
  font-weight: bold;
  color: #fff;

  :hover {
    opacity: 0.8;
  }
`;

export const KilledNow = styled.button`
  ${ButtonStyle}
  background-color: ${({ theme }) => theme.colors.mvpCard.killButton};
`;

export const EditButton = styled.button`
  ${ButtonStyle}
  background-color: ${({ theme }) => theme.colors.mvpCard.editButton};
`;

export const Controls = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isActive }) => (isActive ? 'column' : 'row')};

  margin-top: ${({ isActive }) => (isActive ? 35 : 8)}px;
  gap: 15px;
`;

export const Control = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  border-radius: 50%;

  font-weight: bolder;

  svg {
    stroke-width: 3px;
    width: 17px;
    height: 17px;
    color: #fff;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :hover {
    opacity: 0.8;
  }

  :first-child {
    background-color: ${({ theme }) => theme.colors.mvpCard.controls.showMap};
  }

  :nth-child(2) {
    background-color: ${({ theme }) => theme.colors.mvpCard.controls.edit};
  }

  :nth-child(3) {
    background-color: ${({ theme }) => theme.colors.mvpCard.controls.delete};
  }
`;
