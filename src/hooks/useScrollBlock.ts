import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import type { BodyScrollOptions } from 'body-scroll-lock';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const options: BodyScrollOptions = {
  reserveScrollBarGap: true,
};

const DocumentBody = document.body;

type Response<S> = [S, Dispatch<SetStateAction<S>>];

export function useScrollBlock<S>(initialState: S | (() => S)): Response<S> {
  const [isScrollBlocked, setIsScrollBlocked] = useState<S>(initialState);

  useEffect(() => {
    isScrollBlocked
      ? disableBodyScroll(DocumentBody, options)
      : enableBodyScroll(DocumentBody);
    return () => enableBodyScroll(DocumentBody);
  }, [isScrollBlocked]);

  return [isScrollBlocked, setIsScrollBlocked];
}
