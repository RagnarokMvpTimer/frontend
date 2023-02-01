import { useTimer } from '../../hooks';
import { Hour } from './styles';

export function HeaderTimer() {
  const { time } = useTimer();

  return <Hour>{time.format('HH:mm:ss')}</Hour>;
}
