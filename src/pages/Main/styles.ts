import styled, { css } from 'styled-components';
import { mobile, phone } from '../../utils/media';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //padding: 1% 10% 5% 10%;
  padding-bottom: 15px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ContainerTypeText = styled.span`
  font-weight: bold;

  margin: 10px 0;

  color: ${({ theme }) => theme.colors.text};
`;

export const MvpsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;

  ${mobile(css`
    grid-template-columns: repeat(2, 1fr);
  `)}

  ${phone(css`
    grid-template-columns: repeat(1, 1fr);
  `)}
`;
