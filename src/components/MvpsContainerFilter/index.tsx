import { SortSelect } from '../SortSelect';

import {
  Container,
  SearchContainer,
  SearchIcon,
  SearchInput,
  ClearButton,
  SortContainer,
  Reverse,
  UpArrow,
  DownArrow,
} from './styles';

interface FilterProps {
  searchQuery: string;
  onChangeQuery: (value: string) => void;
  currentSort: string;
  onSelectSort: (value: string) => void;
  isReverse: boolean;
  onReverse: () => void;
}

export function MvpsContainerFilter({
  searchQuery,
  onChangeQuery,
  currentSort,
  onSelectSort,
  isReverse,
  onReverse,
}: FilterProps) {
  function handleQuery(value: string) {
    sessionStorage.setItem('search', value);
    onChangeQuery(value);
  }

  return (
    <Container>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          value={searchQuery}
          onChange={(e) => handleQuery(e.target.value)}
          title='Search mvps by his name or id'
        />
        <ClearButton
          onClick={() => handleQuery('')}
          title='Clear current search'
          visibility={searchQuery ? 'visible' : 'hidden'}
        />
      </SearchContainer>

      <SortContainer>
        <SortSelect
          value={currentSort}
          onChange={(type) => {
            sessionStorage.setItem('sort', type);
            onSelectSort(type);
          }}
        />

        <Reverse
          onClick={() => {
            sessionStorage.setItem('reverse', String(!isReverse));
            onReverse();
          }}
          title='Reverse current sort'
        >
          {isReverse ? <UpArrow /> : <DownArrow />}
        </Reverse>
      </SortContainer>
    </Container>
  );
}
