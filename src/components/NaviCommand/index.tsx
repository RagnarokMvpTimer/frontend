import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Clipboard, Check } from '@styled-icons/feather';

import { NaviCommandContainer } from './styles';

interface NaviCommandProps {
  mapName: string;
}

export function NaviCommand({ mapName }: NaviCommandProps) {
  const [copied, setCopied] = useState(false);

  const naviCommand = `/navi ${mapName} 50/50`;

  function copyToClipboard() {
    if (copied) return;

    setCopied(true);
    navigator.clipboard.writeText(naviCommand);
    setTimeout(() => setCopied(false), 1000);
  }

  return (
    <NaviCommandContainer
      onClick={copyToClipboard}
      disabled={copied}
      title='Copy to Clipboard'
    >
      {copied ? (
        <>
          <Check />
          <FormattedMessage id='copied' />
        </>
      ) : (
        <>
          <Clipboard />
          {naviCommand}
        </>
      )}
    </NaviCommandContainer>
  );
}
