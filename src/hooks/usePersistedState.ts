import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T
): Response<T> {
  const [state, setState] = useState(() => {
    try {
      const storageValue = localStorage.getItem(key);
      return storageValue ? JSON.parse(storageValue) : initialState;
    } catch (error) {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state || initialState));
  }, [key, state]);

  return [state, setState];
}
