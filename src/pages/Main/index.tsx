import { useContext } from 'react';

import { MvpCard } from '../../components/MvpCard';
import { SettingsModal } from '../../components/SettingsModal';
import { MvpsContext } from '../../contexts/MvpsContext';
import { SettingsContext } from '../../contexts/SettingsContext';

import { Container, ContainerTypeText, MvpsContainer } from './styles';

export function Main() {
  const { activeMvps, allMvps } = useContext(MvpsContext);
  const { isSettingsModalOpen } = useContext(SettingsContext);

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

      {isSettingsModalOpen && <SettingsModal />}
    </Container>
  );
}
