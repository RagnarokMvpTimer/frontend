import { useTimer } from '@/hooks';
import { Hour } from './styles';

type Props = {
  use24HourFormat: boolean;
};

export function HeaderTimer({ use24HourFormat }: Props) {
  const [time] = useTimer();

  return (
    <Hour>{time.format(use24HourFormat ? 'HH:mm:ss' : 'hh:mm:ss A')}</Hour>
  );
}
