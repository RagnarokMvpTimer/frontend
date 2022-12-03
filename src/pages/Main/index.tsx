import { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { MvpCard } from '../../components/MvpCard';
import { MvpsContext } from '../../contexts/MvpsContext';
import { MvpsContainerFilter } from '../../components/MvpsContainerFilter';

import { sortBy } from '../../utils/sort';
import { Mvp } from '../../interfaces';

import { Container, Section, SectionTitle, MvpsContainer } from './styles';

export function Main() {
  const { activeMvps, allMvps } = useContext(MvpsContext);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentSort, setCurrentSort] = useState<string>('id');
  const [reverseSort, setReverseSort] = useState<boolean>(false);

  const allMvpsFilteredAndSorted = (
    searchQuery?.length > 0
      ? allMvps.filter((i) =>
          i.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
        )
      : allMvps
  ).sort(sortBy(currentSort));
  reverseSort && allMvpsFilteredAndSorted.reverse();

  return (
    <Container>
      {activeMvps.length > 0 && (
        <Section>
          <SectionTitle>
            <FormattedMessage id='active' />
          </SectionTitle>
          <MvpsContainer>
            {activeMvps.map((mvp: Mvp) => (
              <MvpCard key={`${mvp.id}-${mvp.deathMap}`} mvp={mvp} isActive />
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

        {allMvpsFilteredAndSorted.length > 0 && (
          <MvpsContainer>
            {allMvpsFilteredAndSorted.map((mvp: Mvp) => (
              <MvpCard key={mvp.id} mvp={mvp} />
            ))}
          </MvpsContainer>
        )}
      </Section>
    </Container>
  );
}
