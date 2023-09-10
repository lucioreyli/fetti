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
      className="flex gap-6 flex-1 w-full py-7 px-5 justify-start"
      {...props}
    >
      <PostgresIcon className="w-4 h-4" />
      <div className="flex flex-col items-start overflow-hidden text-ellipsis whitespace-nowrap">
        <span className="block font-semibold">
          {item.name || 'Postgres connection'}
        </span>
        <span className=" text-sm !w-[3px] text-muted-foreground text-ellipsis whitespace-nowrap">
          {item.host}
        </span>
      </div>
    </Button>
  );
};
