import { useContext } from 'react';

import { MvpCard } from '../../components/MvpCard';
import { MvpsContext } from '../../contexts/MvpsContext';

import { Container, ContainerTypeText, MvpsContainer } from './styles';

export function Main() {
  const { activeMvps, allMvps } = useContext(MvpsContext);

  return (
    <Container>
      {activeMvps.length > 0 && (
        <>
          <ContainerTypeText>Active</ContainerTypeText>
          <MvpsContainer>
            {activeMvps.map((mvp) => (
              <MvpCard key={`${mvp.id}-${mvp.deathMap}`} mvp={mvp} isActive />
            ))}
          </MvpsContainer>
        </>
      )}
      {allMvps.length > 0 && (
        <>
          <ContainerTypeText>All</ContainerTypeText>
          <MvpsContainer>
            {allMvps.map((mvp) => (
              <MvpCard key={mvp.id} mvp={mvp} />
            ))}
          </MvpsContainer>
        </>
      )}
    </Container>
  );
}
