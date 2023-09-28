import { useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { MvpCard } from '../../components/MvpCard';
import { useMvpsContext } from '../../contexts/MvpsContext';
import { MvpsContainerFilter } from '../../components/MvpsContainerFilter';
import { ModalEditMvp } from '../../components/ModalEditMvp';

import { sortBy } from '../../utils/sort';

import { Container, Section, SectionTitle, MvpsContainer } from './styles';

export function Main() {
  const { activeMvps, allMvps, editingMvp } = useMvpsContext();
  const [searchQuery, setSearchQuery] = useState<string>();
  const [currentSort, setCurrentSort] = useState<string>('id');
  const [reverseSort, setReverseSort] = useState<boolean>(false);

  const allMvpsFilteredAndSorted = useMemo(
    () =>
      (searchQuery
        ? allMvps.filter((i) =>
            i.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
          )
        : allMvps
      )?.sort(sortBy(currentSort)),
    [searchQuery, allMvps, currentSort]
  );

  const displayAllMvps = reverseSort
    ? allMvpsFilteredAndSorted.slice().reverse()
    : allMvpsFilteredAndSorted;

  return (
    <>
      <Container>
        {activeMvps.length > 0 && (
          <Section>
            <SectionTitle>
              <FormattedMessage id='active' />
            </SectionTitle>

            <MvpsContainer>
              {activeMvps.map((mvp: IMvp) => (
                <MvpCard key={`${mvp.id}-${mvp.deathMap}`} mvp={mvp} />
              ))}
            </MvpsContainer>
          </Section>
        )}

        <Section>
          <SectionTitle>
            <FormattedMessage id='all' />
          </SectionTitle>

          <MvpsContainerFilter
            onChangeQuery={(value) => setSearchQuery(value)}
            onSelectSort={(value) => setCurrentSort(value)}
            isReverse={reverseSort}
            onReverse={() => setReverseSort((s) => !s)}
          />

          {displayAllMvps.length > 0 && (
            <MvpsContainer>
              {displayAllMvps.map((mvp: IMvp) => (
                <MvpCard key={mvp.id} mvp={mvp} />
              ))}
            </MvpsContainer>
          )}
        </Section>
      </Container>

      {!!editingMvp && <ModalEditMvp />}
    </>
  );
}
