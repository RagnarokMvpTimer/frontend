import { useEffect } from 'react';

export function useKey(key: string, callback: () => void) {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === key) callback();
    };

    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [key, callback]);
}
