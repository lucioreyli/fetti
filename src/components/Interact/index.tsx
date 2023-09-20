import type { FC } from 'react';
import { Header } from './Header';
import { Separator } from '../ui/separator';
// import { ResizableWrapper } from './ResizableWrapper';
import { Script } from './Script';

export const Interact: FC = () => {
  <Header tableName="users" />;
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col w-full h-full flex-1 p-6 space-y-4 overflow-scroll">
        <Script />
      </div>
      <Separator />
      <div className="bg-blue-000 flex-1 resize-y"></div>
    </div>
  );
};
