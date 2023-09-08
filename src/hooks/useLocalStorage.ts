import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(
    (JSON.parse(localStorage.getItem(key)!) ?? defaultValue) as T,
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
