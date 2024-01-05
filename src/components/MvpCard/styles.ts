import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 220px;
  padding: 10px 0;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.mvpCard.bg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ID = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mvpCard.id};
`;

export const Name = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mvpCard.name};
`;

export const MapName = styled.span`
  text-align: center;
  white-space: pre-wrap;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.mvpCard.text};
`;

const Button = styled.button`
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

export const KilledNow = styled(Button)`
  background-color: ${({ theme }) => theme.colors.mvpCard.killButton};
`;

export const EditButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.mvpCard.editButton};
`;

export const Controls = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isActive }) => (isActive ? 'column' : 'row')};

  margin-top: ${({ isActive }) => (isActive ? 35 : 8)}px;
  gap: 10px;
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

  /* :nth-child(4) {
    background-color: ${({ theme }) => theme.colors.mvpCard.controls.edit};
  } */
`;
