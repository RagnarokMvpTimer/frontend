import { useState } from 'react';

import { useSettings } from '@/contexts/SettingsContext';
import { ModalSelectServer } from '../ModalSelectServer';
import { GetTranslateText } from '@/utils/GetTranslateText';

import { Button } from './styles';

export function ServerButton() {
  const { server } = useSettings();
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsSelectionOpen((prev) => !prev)}
        title={GetTranslateText('select_server_btn_title')}
      >
        {server}
      </Button>

      {isSelectionOpen && (
        <ModalSelectServer close={() => setIsSelectionOpen(false)} />
      )}
    </>
  );
}
