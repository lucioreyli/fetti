'use client';
import { useEffect, type FC, useState } from 'react';
import { DBItem } from '../DBItem';
import { useConnectionsStore } from '@/store/connections';
import type { Connection } from '@/types';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '../ui/context-menu';
import { Copy, PlugZap2, Trash } from 'lucide-react';
import { Separator } from '../ui/separator';

export const SavedDatabases: FC = () => {
  const [savedDbs, deleteConnectionById, duplicateConnectionById] =
    useConnectionsStore((state) => [
      state.connections,
      state.deleteConnectionById,
      state.duplicateConnectionById,
    ]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fix hydratation error - https://github.com/pmndrs/zustand/issues/938#issuecomment-1422805072
    setLoaded(true);
  }, []);

  const handleSelectItem = (connection: Connection) => {
    const event = new CustomEvent('select-connection', { detail: connection });
    window.dispatchEvent(event);
  };

  return (
    <div className="p-6 space-y-4 overflow-auto h-full flex-[0.25]">
      <h4 className="ll-m-20 border-b pb-2 tracking-tight transition-colors first:mt-0 mb-4">
        Saved databases
      </h4>
      {(loaded ? savedDbs : []).map((item) => (
        <ContextMenu key={item.id}>
          <ContextMenuTrigger key={item.id}>
            <DBItem item={item} onClick={() => handleSelectItem(item)} />
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <PlugZap2 className="w-4 h-4 mr-2" />
              Connect
            </ContextMenuItem>
            <ContextMenuItem onClick={() => duplicateConnectionById(item.id)}>
              <Copy className="w-4 h-4 mr-2" />
              Duplicate
            </ContextMenuItem>
            <Separator />
            <ContextMenuItem
              className="text-primary hover:text-primary"
              onClick={() => deleteConnectionById(item.id)}
            >
              <Trash className="w-4 h-4 mr-2" />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  );
};
