import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //padding: 1% 10% 5% 10%;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ContainerType = styled.span`
  font-weight: bold;

  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ActiveMvpsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
`;

export const AllMvpsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
