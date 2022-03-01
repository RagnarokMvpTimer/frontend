import styled, { css } from 'styled-components';
import { mobile, phone, tablet } from '../../utils/media';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;

  padding: 0 30px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  ${tablet(css`
    width: 86.2px;
  `)}
`;

export const Logo = styled.img`
  width: 55px;
  height: auto;
`;

export const Title = styled.p`
  margin-left: 20px;

  font-weight: bold;
  font-size: 22px;

  //color: ${({ theme }) => theme.colors.text};
  color: #fff;

  ${tablet(css`
    display: none;
  `)}
`;

export const Hour = styled.span`
  font-size: 24px;
  font-weight: bold;

  //color: ${({ theme }) => theme.colors.text};
  color: #fff;

  @media only screen and (min-width: 768px) {
    margin-left: -220px;
  }

  ${tablet(css`
    margin-left: 0;
  `)}
`;

export const Customization = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet(css`
    width: 86.2px;
  `)}
`;

export const CurrentLanguage = styled.span`
  color: #fff;
  margin-right: 15px;

  ${phone(css`
    display: none;
  `)}
`;

export const SwitchContainer = styled.div`
  width: auto;
  margin-top: 6px;
`;
