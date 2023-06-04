import styled from 'styled-components';

export const NaviCommandContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  color: ${({ theme }) => theme.colors.modal.text};
  border: 1px solid ${({ theme }) => theme.colors.modal.hl};
  border-radius: 0.6rem;
  padding: 0.6rem;

  font-size: 1.6rem;
  cursor: pointer;
  background: none;

  > svg {
    width: 1.8rem;
    height: 1.8rem;
    stroke-width: 2px;
  }

  :disabled {
    cursor: not-allowed;
    > svg {
      margin-top: 1px;
    }
  }

  :hover {
    opacity: 0.8;
  }
`;
