import styled, { css } from 'styled-components';
import { mobile } from '@/utils/media';

export const Modal = styled.div`
  height: auto;
  max-height: 95vh;

  padding: 2rem;
  gap: 8px;

  border-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: var(--modal_bg);

  ${mobile(css`
    width: 100%;
    height: 100%;
    max-height: 100vh;
  `)}
`;

export const Title = styled.span`
  color: var(--modal_name);
  margin-top: -30px;
  text-align: center;

  font-size: 24px;
  font-weight: 600;
`;

export const MapsDisplayGrid = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => (cols > 2 ? 3 : 2)}, 1fr);
  overflow-y: auto;

  ${mobile(css`
    display: flex;
    flex-direction: column;
  `)}
`;

export const MapCard = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(---modal_text);
  background: none;
  cursor: pointer;

  border-width: 3px;
  border-style: solid;
  border-radius: 6px;
  border-color: transparent;
  padding: 1rem;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: var(--modal_changeMap_selectedMapBorder);
    `}
`;

export const MapDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
`;

export const MapName = styled.span`
  font-weight: bold;
`;

export const MapRespawnTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
