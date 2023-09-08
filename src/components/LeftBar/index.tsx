'use client';
import { useEffect, type FC } from 'react';
import { DBItem } from '../DBItem';
import type { Connection } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const LeftBar: FC = () => {
  const [savedDbs, setSavedDBs] = useLocalStorage<Connection[]>('dbs', []);

  useEffect(() => {
    const updateDbs = (data: unknown): void => {
      const connection = (data as { detail: Connection }).detail as Connection;
      setSavedDBs((prev) => prev.concat(connection));
    };
    window.addEventListener('create-connection', updateDbs);
    return () => window.removeEventListener('create-connection', updateDbs);
  }, [setSavedDBs]);

  return (
    <div className="flex-0 sm:flex-[0.3] py-6 px-6 space-y-2 overflow-auto h-full">
      <h4 className="ll-m-20 border-b pb-2 tracking-tight transition-colors first:mt-0 mb-4">
        Saved databases
      </h4>
      {savedDbs.map((item, index) => (
        <DBItem key={index.toString()} item={item} />
      ))}
    </div>
  );
};
