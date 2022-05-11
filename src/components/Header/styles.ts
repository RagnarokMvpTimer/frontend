import styled, { css } from 'styled-components';
import { mobile, phone, tablet } from '../../utils/media';

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;

  height: 75px;
  padding: 0 30px;

  background-color: ${({ theme }) => theme.colors.primary};
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

  color: #fff;

  ${tablet(css`
    display: none;
  `)}
`;

export const Hour = styled.span`
  font-size: 24px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: 1 / 2 / 2 / 3;

  color: #fff;
`;

export const Customization = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: 1 / 3 / 2 / 4;

  gap: 15px;
`;
