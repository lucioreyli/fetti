import type { FC } from 'react';
import { Header } from './Header';
import { Table } from '../ui/table';
import { DBTable } from './db-table';
import { Script } from './Script';
import { Actions } from './Actions';
// import { ResizableWrapper } from './ResizableWrapper';

export const Interact: FC = () => {
  return (
    <div className="flex flex-col flex-1">
      {<DBTable /> ?? (
        <>
          <div className="flex flex-col w-full h-full flex-1 p-6 space-y-4 overflow-scroll min-w-0 border-b">
            <Header tableName="users" />
            <Script />
            <Actions />
          </div>
          <div className="bg-blue-000 flex-1 resize-y"></div>
        </>
      )}
    </div>
  );
};
