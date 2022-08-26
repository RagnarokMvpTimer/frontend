import { Themes } from '../../styles/Themes';

import RSwitch from 'react-switch';
import { useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

export function Switch({ onChange, checked }: SwitchProps) {
  const { theme } = useContext(SettingsContext);
  const { colors } = Themes[theme] || Themes.dark;

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
