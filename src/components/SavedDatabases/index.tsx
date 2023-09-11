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

export const SavedDatabases: FC = () => {
  const [savedDbs] = useConnectionsStore((state) => [state.connections]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fix hydratation error - https://github.com/pmndrs/zustand/issues/938#issuecomment-1422805072
    setLoaded(true);
  }, [savedDbs]);

  const handleSelectItem = (connection: Connection) => {
    const event = new CustomEvent('select-connection', { detail: connection });
    window.dispatchEvent(event);
  };

  return (
    <div className="py-6 px-6 space-y-2 overflow-auto h-full flex-[0.25]">
      <h4 className="ll-m-20 border-b pb-2 tracking-tight transition-colors first:mt-0 mb-4">
        Saved databases
      </h4>
      {(loaded ? savedDbs : []).map((item, index) => (
        <ContextMenu key={index.toString()}>
          <ContextMenuTrigger>
            <DBItem item={item} onClick={() => handleSelectItem(item)} />
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Team</ContextMenuItem>
            <ContextMenuItem>Subscription</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  );
};
