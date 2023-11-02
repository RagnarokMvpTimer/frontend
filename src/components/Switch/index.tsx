import RSwitch from 'react-switch';
import { useSettings } from '@/contexts/SettingsContext';
import { DEFAULT_THEME } from '@/constants';
import { Themes } from '@/styles/Themes';

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

export function Switch({ onChange, checked }: SwitchProps) {
  const { theme } = useSettings();
  const { colors } = Themes[theme || DEFAULT_THEME];

  return (
    <RSwitch
      onChange={onChange}
      checked={checked}
      height={25}
      width={50}
      handleDiameter={15}
      checkedIcon={false}
      uncheckedIcon={false}
      offColor={colors.switch.bg}
      onColor={colors.switch.bg}
      offHandleColor={colors.switch.handle}
      onHandleColor={colors.switch.handle}
    />
  );
}
