import styled from 'styled-components';

const HIGHT = 25;
const WIDTH = 50;
const THUMB_DIAMETER = 15;

export const Container = styled.label`
  position: relative;
  display: inline-block;
  min-width: ${WIDTH}px;
  min-height: ${HIGHT}px;
`;

export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

export const Thumb = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--switch_bg);
  transition: 0.4s;
  border-radius: ${HIGHT}px;

  ::before {
    content: '';
    position: absolute;
    height: ${THUMB_DIAMETER}px;
    width: ${THUMB_DIAMETER}px;
    left: 5px;
    bottom: 5px;
    background-color: var(--switch_handle);
    transition: 0.4s;
    border-radius: 50%;

    ${Input}:checked ~ & {
      transform: translateX(${HIGHT}px);
    }
  }

  ${Input}:checked ~ & {
    background-color: var(--switch_bg);
  }
`;
