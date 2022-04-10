import { useState } from 'react';
import { ChevronDown, ChevronUp } from '@styled-icons/feather';

import { Container } from './styles';

export function LanguageSelector() {
  const [isLangSelectorOpen, setIsLangSelectorOpen] = useState(false);

  function handleLanguageSelector() {
    setIsLangSelectorOpen((state) => !state);
  }

  return (
    <Container onClick={handleLanguageSelector}>
      EN{' '}
      {isLangSelectorOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
    </Container>
  );
}
