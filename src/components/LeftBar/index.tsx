'use client';
import { useEffect, type FC, useState } from 'react';
import { DBItem } from '../DBItem';
import { useConnectionsStore } from '@/store/connections';

export const LeftBar: FC = () => {
  const [savedDbs] = useConnectionsStore((state) => [state.connections]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fix hydratation error - https://github.com/pmndrs/zustand/issues/938#issuecomment-1422805072
    setLoaded(true);
  }, [savedDbs]);

  return (
    <div className="flex-0 sm:flex-[0.3] py-6 px-6 space-y-2 overflow-auto h-full">
      <h4 className="ll-m-20 border-b pb-2 tracking-tight transition-colors first:mt-0 mb-4">
        Saved databases
      </h4>
      {(loaded ? savedDbs : []).map((item, index) => (
        <DBItem key={index.toString()} item={item} />
      ))}
    </div>
  );
};
