import { styled } from '@linaria/react';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding-bottom: 30px;
  background-color: var(--secondary);
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  gap: 15px;
`;

export const SectionTitle = styled.span`
  font-weight: bold;
  color: var(--text);
`;

export const MvpsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${1000 / 16}em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${650 / 16}em) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
