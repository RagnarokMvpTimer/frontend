import { useRef, useEffect } from 'react';

interface Props {
  onClick: () => void;
}

export function useClickOutside({ onClick }: Props) {
  const ref = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick();
      }
    }
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  }, [onClick]);

  return ref;
}
