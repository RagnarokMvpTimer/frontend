import { styled } from '@linaria/react';

export const Container = styled.div`
  cursor: pointer;

  > svg {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
    color: white;
  }

  &:hover {
    opacity: 0.8;
    animation: rotate 4s linear infinite;

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }
`;
