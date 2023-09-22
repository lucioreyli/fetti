import { create } from 'zustand';
import type { Setter } from './types';

type UseCodeStore = { code: string; setCode: Setter<string> };

export const useCodeStore = create<UseCodeStore>((set) => ({
  code: '// Postgres',
  setCode: (code) => set({ code }),
}));
