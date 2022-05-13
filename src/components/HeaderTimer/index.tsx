import { useTimer } from '../../hooks/useTimer';
import { Hour } from './styles';

export function HeaderTimer() {
  const { time } = useTimer();

  return <Hour>{time.format('HH:mm:ss')}</Hour>;
}
