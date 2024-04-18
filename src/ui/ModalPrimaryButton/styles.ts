import { styled } from '@linaria/react';

export type Sizes = 'sm' | 'lg';

export const BtnSizes: {
  [key in Sizes]: string;
} = {
  sm: '15rem',
  lg: '25rem',
};

export const Button = styled.button<{
  size?: Sizes;
}>`
  width: ${({ size }) => (size ? BtnSizes[size] : BtnSizes['sm'])};
  min-height: 5rem;

  font-weight: 600;
  font-size: 1.8rem;
  border-radius: 0.8rem;

  color: white;
  background-color: var(--modal_button);

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled) {
    &:hover {
      opacity: 0.8;
    }
  }
`;
