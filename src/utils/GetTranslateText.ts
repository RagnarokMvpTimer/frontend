import { useIntl } from 'react-intl';

export const GetTranslateText = (id: string) => {
  const intl = useIntl();
  const text = intl.formatMessage({ id });
  return text;
};
