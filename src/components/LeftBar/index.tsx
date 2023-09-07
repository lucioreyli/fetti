import type { FC } from 'react';
import { DBItem } from '../DBItem';

export const LeftBar: FC = () => {
  return (
    <div className="flex-[0.3] sm:flex-[0.2] pl-6 space-y-2 overflow-auto h-screen">
      <h4 className="py-6 sticky top-0 bg-background">Saved databases</h4>
      {Array.from({ length: 36 }, (_, i) => (
        <DBItem key={i.toString()} />
      ))}
    </div>
  );
};
