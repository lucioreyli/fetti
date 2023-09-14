import type { FC } from 'react';
import { Header } from './Header';

export const Interact: FC = () => {
  return (
    <div className="grid grid-rows-3 flex-1">
      <div className="row-span-2 bg-red-000 p-6">
        <Header tableName="users" />
      </div>
      <div className="bg-blue-000"></div>
    </div>
  );
};
