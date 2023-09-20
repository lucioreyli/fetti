import type { Connection } from '@/types';
import { persist } from 'zustand/middleware';
import { create } from 'zustand';
import type { Setter } from './types';

type UseConnectionStore = {
  connections: Connection[];
  saveNewConnection: Setter<Connection>;
  setConnections: (connections: Connection[]) => void;
  deleteConnectionById: (id: string) => void;
  duplicateConnectionById: (id: string) => void;
};

export const useConnectionsStore = create<UseConnectionStore>()(
  persist(
    (set, get) => ({
      connections: [],
      setConnections: (con) => set({ connections: con }),
      saveNewConnection: (con) =>
        set({ connections: get().connections.concat(con) }),
      deleteConnectionById: (id) =>
        set((state) => ({
          connections: state.connections.filter((i) => i.id !== id),
        })),
      duplicateConnectionById: (id) => {
        const connections = get().connections;
        const connectionIndex = connections.findIndex((con) => con.id === id);
        if (connectionIndex < 0) {
          return;
        }
        const connection = connections[connectionIndex];
        connections.splice(connectionIndex, 0, {
          ...connection,
          id: window.crypto.randomUUID(),
        });
        return set({ connections: connections });
      },
    }),
    {
      name: 'connections-storage',
      partialize: (state) => ({ connections: state.connections }),
    },
  ),
);
