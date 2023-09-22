import { create } from 'zustand';
import type { Setter } from './types';
import type { Connection } from '@/types';

type UseDatabaseStore = {
  connection: Connection | null;
  setConnection: Setter<Connection | null>;

  currentSchema: string | null;
  setCurrentSchema: Setter<string | null>;

  tableName: string | null;
  setTableName: Setter<string | null>;

  table: Record<string, any> | null;
  setTable: Setter<Record<string, any> | null>;
};

export const useDatabaseStore = create<UseDatabaseStore>((set) => ({
  connection: null,
  setConnection: (con) => set({ connection: con }),

  currentSchema: null,
  setCurrentSchema: (schema) => set({ currentSchema: schema }),

  tableName: null,
  setTableName: (tableName) => set({ tableName }),

  table: null,
  setTable: (table) => set({ table }),
}));
