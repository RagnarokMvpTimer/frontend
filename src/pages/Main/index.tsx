import { useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { MvpCard } from '@/components/MvpCard';
import { useMvpsContext } from '@/contexts/MvpsContext';
import { MvpsContainerFilter } from '@/components/MvpsContainerFilter';
import { ModalEditMvp } from '@/modals';

import { sortBy } from '@/utils/sort';

import { Container, Section, SectionTitle, MvpsContainer } from './styles';

export function Main() {
  const { activeMvps, allMvps, editingMvp } = useMvpsContext();
  const [searchQuery, setSearchQuery] = useState<string>(
    sessionStorage.getItem('search') || ''
  );
  const [currentSort, setCurrentSort] = useState<string>(
    sessionStorage.getItem('sort') || 'id'
  );
  const [reverseSort, setReverseSort] = useState<boolean>(
    sessionStorage.getItem('reverse') === 'true'
  );

  const allMvpsFilteredAndSorted = useMemo(() => {
    const filtered = searchQuery
      ? allMvps.filter((i) =>
          `${i.id}-${i.name}`
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
        )
      : allMvps;

    return filtered.sort(sortBy(currentSort));
  }, [allMvps, searchQuery, currentSort]);

  const displayAllMvps = reverseSort
    ? allMvpsFilteredAndSorted.toReversed()
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
            searchQuery={searchQuery}
            onChangeQuery={setSearchQuery}
            currentSort={currentSort}
            onSelectSort={setCurrentSort}
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
