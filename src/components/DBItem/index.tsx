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
      variant="link"
      className="flex justify-between w-full py-7 px-5 text-left flex-1 mb-2"
      {...props}
    >
      <div className="mr-6">
        <PostgresIcon className="w-6 h-6" />
      </div>
      <div className="w-10/12">
        <span className="text-normal block w-full overflow-hidden truncate">
          {item.name || 'Postgres Connection'}
        </span>
        <span className="text-sm text-muted-foreground block overflow-hidden w-full truncate">
          {item.host}
        </span>
      </div>
    </Button>
  );
};
