import { create } from 'zustand';
import type { Setter } from './types';

type UseConnectionStore = { code: string; setCode: Setter<string> };

export const useCodeStore = create<UseConnectionStore>((set) => ({
  code: '// Postgres',
  setCode: (code) => set({ code }),
}));

