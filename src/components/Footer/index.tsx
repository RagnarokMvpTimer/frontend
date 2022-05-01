import { Github, ExternalLink } from '@styled-icons/feather';

import { FooterContainer, Main, Text, Bold, Link } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <Main>
        <Text>
          Made with ❤️ by{' '}
          <Link href='https://github.com/Lucas8x' target='_blank'>
            Lucas Emanuel <Github size={14} />
          </Link>
        </Text>

        <Text>
          Source code avaliable on{' '}
          <Link
            href='https://github.com/RagnarokMvpTimer/frontend'
            target='_blank'
          >
            Github <Github size={14} />
          </Link>
        </Text>

        <Text>
          Hosted on{' '}
          <Link href='https://vercel.com/' target='_blank'>
            ▲ Vercel <ExternalLink size={14} />
          </Link>
        </Text>

        <Text>
          Sprites from{' '}
          <Link href='https://www.divine-pride.net/' target='_blank'>
            DivinePride <ExternalLink size={14} />
          </Link>
          &{' '}
          <Link href='https://db.irowiki.org/' target='_blank'>
            iRO Wiki DB <ExternalLink size={14} />
          </Link>
        </Text>

        <Text>
          This site is not affiliated with <Bold>DivinePride</Bold> or{' '}
          <Bold>Gravity Interactive</Bold>
        </Text>
      </Main>
    </FooterContainer>
  );
}
