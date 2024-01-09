import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 1rem;
  padding: 2rem 0;
  border-radius: 6px;
  margin: 0 1rem;

  background-color: var(--modal_bg);
`;

export const Name = styled.span`
  color: var(---modal_text);
  font-weight: bold;
  font-size: 1.8rem;
`;

export const Warning = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 3rem;

  color: var(---modal_text);
  font-weight: bold;
  font-size: 1.4rem;
`;
