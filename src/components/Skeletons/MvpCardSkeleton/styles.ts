import { styled } from '@linaria/react';

const animation = {
  animation: 'pulse 1s infinite',
  backgroundColor: 'var(--pulse_color)',

  '@keyframes pulse': {
    '0%, 100%': {
      opacity: '1',
    },
    '50%': {
      opacity: 0.5,
    },
  },
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 220px;
  height: 288px;
  padding: 10px 0;
  border-radius: 8px;

  background-color: var(--mvpCard_bg);
  border: 1px solid var(--primary);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const ID = styled.div`
  width: 38px;
  height: 18px;
  ${animation}
`;

export const Name = styled.div`
  width: 100px;
  height: 20px;
  ${animation}
`;

export const Sprite = styled.div`
  width: 60px;
  height: 100%;
  margin-top: 8px;
  ${animation};
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
  margin-top: 8px;
  gap: 10px;
`;

export const Button = styled.div`
  width: 100%;
  height: 36px;
  border-radius: 4px;
  ${animation}
`;
