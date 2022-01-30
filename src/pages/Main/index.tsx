import { useContext } from 'react';

import { MvpCard } from '../../components/MvpCard';
import { MvpsContext } from '../../contexts/MvpsContext';

import {
  Container,
  ContainerType,
  ActiveMvpsContainer,
  AllMvpsContainer,
} from './styles';

export function Main() {
  const { activeMvps, allMvps } = useContext(MvpsContext);

  return (
    <Container>
      {activeMvps.length > 0 && (
        <>
          <ContainerType>Active</ContainerType>
          <ActiveMvpsContainer>
            {activeMvps.map((mvp) => (
              <MvpCard key={`${mvp.id}-${mvp.deathMap}`} mvp={mvp} isActive />
            ))}
          </ActiveMvpsContainer>
        </>
      )}
      {allMvps.length > 0 && (
        <>
          <ContainerType>All</ContainerType>
          <AllMvpsContainer>
            {allMvps.map((mvp) => (
              <MvpCard key={mvp.id} mvp={mvp} />
            ))}
          </AllMvpsContainer>
        </>
      )}
    </Container>
  );
}
