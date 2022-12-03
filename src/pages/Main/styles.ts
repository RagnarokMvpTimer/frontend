import styled, { css } from 'styled-components';
import { mobile, phone, tablet } from '../../utils/media';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
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
  color: ${({ theme }) => theme.colors.text};
`;

export const MvpsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mobile(css`
    grid-template-columns: repeat(2, 1fr);
  `)}

  ${phone(css`
    grid-template-columns: repeat(1, 1fr);
  `)}
`;
