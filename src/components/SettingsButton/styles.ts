import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  cursor: pointer;

  > svg {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
    color: white;
  }

  :hover {
    opacity: 0.8;
    animation: ${rotate} 4s linear infinite;
  }
`;
