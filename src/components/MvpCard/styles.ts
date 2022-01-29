import styled from 'styled-components';

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

export const Sprite = styled.img`
  width: auto;
  height: 100px;
  margin-top: 8px;
  border-top-left-radius: 30px;
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

export const KilledNow = styled.button`
  width: 100%;
  padding: 5px 20px;

  border: 0;
  border-radius: 4px;

  font-size: 18px;
  font-weight: bold;

  background-color: #ff0000;
  color: #fff;
`;

export const EditButton = styled.button`
  width: 100%;
  padding: 5px 20px;

  border: 0;
  border-radius: 4px;

  font-size: 18px;
  font-weight: bold;

  background-color: #ffa800;
  color: #fff;
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
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :first-child {
    background-color: #00f0ff;
  }

  :nth-child(2) {
    background-color: #ffa800;
  }

  :nth-child(3) {
    background-color: #ff0000;
  }
`;
