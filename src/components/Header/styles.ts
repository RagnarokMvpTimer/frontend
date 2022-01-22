import styled from 'styled-components';

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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Hour = styled.span`
  font-size: 24px;
  font-weight: bold;

  //color: ${({ theme }) => theme.colors.text};
  color: #fff;

  @media only screen and (min-width: 768px) {
    margin-left: -250px;
  }
`;

export const SwitchContainer = styled.div`
  width: auto;
`;
