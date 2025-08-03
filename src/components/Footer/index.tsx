import { Github, ExternalLink } from '@styled-icons/feather';
import { FormattedMessage } from 'react-intl';

import { FooterContainer, Main, Text, Bold, Link } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <Main>
        <Text>
          <FormattedMessage id='made_by' />
          <Link href='https://github.com/Lucas8x' target='_blank'>
            Lucas Emanuel <Github size={14} />
          </Link>
        </Text>

        <Text>
          <FormattedMessage id='source_code' />
          <Link
            href='https://github.com/RagnarokMvpTimer/frontend'
            target='_blank'
          >
            Github <Github size={14} />
          </Link>
        </Text>

        {/* <Text>
          <FormattedMessage id='hosted_on' />
          <Link href='https://vercel.com/' target='_blank'>
            ▲ Vercel <ExternalLink size={14} />
          </Link>
        </Text> */}

        <Text>
          <FormattedMessage id='sprites_from' />
          <Link href='https://www.divine-pride.net/' target='_blank'>
            DivinePride <ExternalLink size={14} />
          </Link>
          &{' '}
          <Link href='https://db.irowiki.org/' target='_blank'>
            iRO Wiki DB <ExternalLink size={14} />
          </Link>
        </Text>

        <Text>
          <FormattedMessage id='affiliation' />
          <Bold>DivinePride, </Bold>
          <Bold>iRO Wiki DB</Bold>
          <FormattedMessage id='or' />
          <Bold>Gravity Interactive</Bold>
        </Text>
      </Main>
    </FooterContainer>
  );
}
