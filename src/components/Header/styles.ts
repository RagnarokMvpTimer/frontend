import styled, { css } from 'styled-components';
import { mobile, phone, tablet } from '../../utils/media';

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;

  height: 75px;
  padding: 0 30px;

  background-color: var(--primary);

  ${tablet(css`
    padding: 0 15px;
  `)}
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  grid-area: 1 / 1 / 2 / 2;
`;

export const Logo = styled.img`
  width: 55px;
  height: auto;
`;

export const Title = styled.p`
  margin-left: 20px;

  font-weight: bold;
  font-size: 22px;

  white-space: nowrap;

  color: var(--header_text);

  @media (min-width: 768px) and (max-width: 935px) {
    font-size: 16px;
  }

  ${tablet(css`
    display: none;
  `)}
`;

export const Customization = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 1.6rem;
`;
