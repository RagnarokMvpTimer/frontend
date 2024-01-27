import { FormattedMessage } from 'react-intl';
import { Option, Select } from './styles';

interface SortSwitchProps {
  onChange: (id: string) => void;
}

const OPTIONS = [
  { id: 'id', name: 'ID' },
  { id: 'level', name: 'Level' },
  { id: 'name', name: 'Name' },
  { id: 'respawnTime', name: 'Respawn' },
  { id: 'health', name: 'Health' },
  { id: 'baseExperience', name: 'Base EXP' },
  { id: 'jobExperience', name: 'Job EXP' },
];

export function SortSelect({ onChange }: SortSwitchProps) {
  return (
    <Select
      defaultValue='id'
      onChange={(e) => onChange(e.target.value)}
      aria-label='Sort mvps por by his properties'
    >
      {OPTIONS.map(({ id, name }) => (
        <Option key={id} value={id} aria-label={name}>
          <FormattedMessage id={id} defaultMessage={name} />
        </Option>
      ))}
    </Select>
  );
}
