import type { Connection } from '@/types';
import { persist } from 'zustand/middleware';
import { create } from 'zustand';
import type { Setter } from './types';

type UseConnectionsStore = {
  connections: Connection[];
  saveNewConnection: Setter<Connection>;
  setConnections: Setter<Connection[]>;
  deleteConnectionById: (id: string) => void;
  duplicateConnectionById: (id: string) => void;

  connection: Connection | null;
  setConnection: Setter<Connection>;
};

export const useConnectionsStore = create<UseConnectionsStore>()(
  persist(
    (set, get) => ({
      connection: null,
      setConnection: (con) => set({ connection: con }),
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
