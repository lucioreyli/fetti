'use client';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(defaultValue);

  useEffect(() => {
    const bkp = JSON.parse(localStorage?.getItem(key)!);
    if (bkp) {
      setState(bkp as T);
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
