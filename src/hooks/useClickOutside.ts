import { useRef, useEffect } from 'react';

export function useClickOutside(onClick: () => void) {
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
