import { SortSelect } from '../SortSelect';

import {
  Container,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SortContainer,
  Reverse,
  UpArrow,
  DownArrow,
} from './styles';

interface FilterProps {
  onChangeQuery: (value: string) => void;
  onSelectSort: (value: string) => void;
  isReverse: boolean;
  onReverse: () => void;
}

export function MvpsContainerFilter({
  onChangeQuery,
  onSelectSort,
  isReverse,
  onReverse,
}: FilterProps) {
  return (
    <Container>
      <SearchContainer>
        <SearchIcon />
        <SearchInput onChange={(e) => onChangeQuery(e.target.value)} />
      </SearchContainer>

      <SortContainer>
        <SortSelect onChange={(type) => onSelectSort(type)} />
        <Reverse onClick={onReverse} title='Reverse'>
          {isReverse ? <UpArrow /> : <DownArrow />}
        </Reverse>
      </SortContainer>
    </Container>
  );
}
