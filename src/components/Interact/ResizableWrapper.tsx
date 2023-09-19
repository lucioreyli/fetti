'use client';
import type { FC, PropsWithChildren } from 'react';
import { Resizable } from 're-resizable';

export const ResizableWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Resizable
      enable={Object.assign(
        Object.fromEntries(
          ['bottom', 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'].map(
            (i) => [i, false],
          ),
        ),
        { top: true },
      )}
      defaultSize={{ width: 'auto', height: '260px' }}
    >
      {children}
    </Resizable>
  );
};
