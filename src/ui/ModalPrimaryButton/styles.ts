import styled from 'styled-components';

export const Button = styled.button`
  width: 15rem;
  height: 5rem;

  font-weight: 600;
  font-size: 1.8rem;
  border-radius: 0.8rem;

  color: white;
  background-color: ${({ theme }) => theme.colors.modal.button};

  :hover {
    opacity: 0.8;
  }
`;
