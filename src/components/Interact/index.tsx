'use client';
import type { FC } from 'react';
import { Header } from './Header';
import { Separator } from '../ui/separator';
import { ResizableWrapper } from './ResizableWrapper';
import { Script } from './Script';

export const Interact: FC = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col h-full flex-1 p-6 space-y-4 overflow-scroll">
        <Header tableName="users" />
        <Script />
      </div>
      <Separator />
      <ResizableWrapper>
        <div className="bg-blue-000 flex-1 resize-y"></div>
      </ResizableWrapper>
    </div>
  );
};
