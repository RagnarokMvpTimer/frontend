import { useCallback, useContext, useState } from 'react';
import { ChevronDown, ChevronUp } from '@styled-icons/feather';

import { SettingsContext } from '../../contexts/SettingsContext';
import { LANGUAGES } from '../../locales';

import {
  Container,
  CurrentLanguage,
  GlobeLang,
  Chevrons,
  Picker,
  LangItem,
} from './styles';

export function LanguageSelector() {
  const { language, changeLanguage } = useContext(SettingsContext);
  const [isLangSelectorOpen, setIsLangSelectorOpen] = useState(false);

  const handleLanguageSelector = useCallback(
    () => setIsLangSelectorOpen((state) => !state),
    []
  );

  const handleLangClick = useCallback(
    (id: string) => {
      changeLanguage(id);
      setIsLangSelectorOpen(false);
    },
    [changeLanguage]
  );

  return (
    <Container>
      <div onClick={handleLanguageSelector}>
        <GlobeLang />
        <CurrentLanguage>{language.toUpperCase()}</CurrentLanguage>
        <Chevrons>
          {isLangSelectorOpen ? <ChevronUp /> : <ChevronDown />}
        </Chevrons>
      </div>

      <Picker isOpen={isLangSelectorOpen}>
        {LANGUAGES.map(({ name, id }) => (
          <LangItem key={id} onClick={() => handleLangClick(id)}>
            {name}
          </LangItem>
        ))}
      </Picker>
    </Container>
  );
}
