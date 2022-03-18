import styled, { css } from 'styled-components';
import { mobile, phone, tablet } from '../../utils/media';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.colors.primary};
`;
