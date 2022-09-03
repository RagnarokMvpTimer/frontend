import { FormattedMessage } from 'react-intl';

import { Option, Select } from './styles';

interface SortSwitchProps {
  onChange: (id: string) => void;
}

const OPTIONS = [
  { id: 'level', name: 'Level' },
  { id: 'health', name: 'Health' },
  { id: 'baseExperience', name: 'Base EXP' },
  { id: 'jobExperience', name: 'Job EXP' },
  { id: 'respawnTime', name: 'Respawn' },
  { id: 'name', name: 'Name' },
  { id: 'id', name: 'ID' },
];

export function SortSelect({ onChange }: SortSwitchProps) {
  return (
    <Select defaultValue='id' onChange={(e) => onChange(e.target.value)}>
      <Option value='none'>
        <FormattedMessage id={'none'} defaultMessage='None' />
      </Option>
      {OPTIONS.map(({ id, name }) => (
        <Option key={id} value={id}>
          <FormattedMessage id={id} defaultMessage={name} />
        </Option>
      ))}
    </Select>
  );
}
