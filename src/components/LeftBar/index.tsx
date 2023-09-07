import type { FC } from 'react';
import { DBItem } from '../DBItem';

export const LeftBar: FC = () => {
  return (
    <div className="flex-0 sm:flex-[0.3] py-6 px-6 space-y-2 overflow-auto h-full">
      <h4 className="ll-m-20 border-b pb-2 tracking-tight transition-colors first:mt-0 mb-4">
        Saved databases
      </h4>
      {Array.from({ length: 4 }, (_, i) => (
        <DBItem key={i.toString()} />
      ))}
    </div>
  );
};
