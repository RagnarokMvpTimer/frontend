import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  > svg {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
    color: white;
    fill: white;
  }

  :hover {
    opacity: 0.8;
  }
`;
