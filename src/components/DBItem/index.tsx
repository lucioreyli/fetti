import type { FC } from 'react';
import type { Connection } from '@/types';
import { Button, type ButtonProps } from '../ui/button';
import { PostgresIcon } from './postgres-icon';

export const DBItem: FC<{ item: Connection } & ButtonProps> = ({
  item,
  ...props
}) => {
  return (
    <Button
      variant="secondary"
      className="flex gap-2 flex-1 w-full p-4 items-center justify-start"
      {...props}
    >
      <PostgresIcon className="w-4 h-4" />
      <span className="font-semibold">
        {item.name || 'Postgres connection'}
      </span>
      <span className="font-semibold">{item.name}</span>
    </Button>
  );
};
