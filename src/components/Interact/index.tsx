import type { FC } from 'react';
import { Header } from './Header';
import { Separator } from '../ui/separator';

export const Interact: FC = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className=" flex-1 bg-red-000 p-6 h-[120px]">
        <Header tableName="users" />
      </div>
      <Separator orientation="horizontal" />
      <div className="bg-blue-000 flex-1 resize-y border-t"></div>
    </div>
  );
};
