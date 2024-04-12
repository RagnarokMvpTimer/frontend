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
  onSelectSort: (value: string) => void;
  isReverse: boolean;
  onReverse: () => void;
}

export function MvpsContainerFilter({
  searchQuery,
  onChangeQuery,
  onSelectSort,
  isReverse,
  onReverse,
}: FilterProps) {
  return (
    <Container>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          value={searchQuery}
          onChange={(e) => onChangeQuery(e.target.value)}
          title='Search mvps by his name or id'
        />
        <ClearButton
          onClick={() => onChangeQuery('')}
          title='Clear current search'
          visibility={searchQuery ? 'visible' : 'hidden'}
        />
      </SearchContainer>

      <SortContainer>
        <SortSelect onChange={(type) => onSelectSort(type)} />
        <Reverse onClick={onReverse} title='Reverse current sort'>
          {isReverse ? <UpArrow /> : <DownArrow />}
        </Reverse>
      </SortContainer>
    </Container>
  );
}
