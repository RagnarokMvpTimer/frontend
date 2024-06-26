import { styled } from '@linaria/react';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  background: none;
  color: var(---modal_text);

  width: 2rem;
  height: 2rem;

  > svg {
    stroke-width: 2.5px;

    &:hover {
      width: 1.8rem;
      height: 1.8rem;
      opacity: 0.7;
    }
  }
`;
