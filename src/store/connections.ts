import type { Connection } from '@/types';
import { persist } from 'zustand/middleware';
import { create } from 'zustand';

type UseConnectionStore = {
  connections: Connection[];
  saveNewConnection: (con: Connection) => void;
  setConnections: (connections: Connection[]) => void;
};

export const useConnectionsStore = create<UseConnectionStore>()(
  persist(
    (set, get) => ({
      connections: [],
      setConnections: (con) => set({ connections: con }),
      saveNewConnection: (con) =>
        set({ connections: get().connections.concat(con) }),
    }),
    {
      name: 'connections-storage',
      partialize: (state) => ({ connections: state.connections }),
    },
  ),
);
