import type { FC } from 'react';
// @ts-expect-error
import Database from 'lucide-react/dist/esm/icons/database';
// @ts-expect-error
import Rows from 'lucide-react/dist/esm/icons/rows';
// @ts-expect-error
import ArrowDownUp from 'lucide-react/dist/esm/icons/arrow-down-up';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

type Props = { tableName: string };

export const Header: FC<Props> = ({ tableName }) => {
  return (
    <nav className="flex justify-between items-center">
      <h3 aria-label="Table name" className="max-w-[20%] truncate">
        {tableName}
      </h3>
      <div className="text-muted-foreground flex gap-x-4 divide-">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="flex items-center text-sm gap-x-1">
                <Database className="w-4 h-4" />
                3MB
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Total table size</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <span className="flex items-center text-sm gap-x-1">
                <Rows className="w-4 h-4" />
                23 rows
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Total table rows</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <span className="flex items-center text-sm gap-x-1">
                <ArrowDownUp className="w-4 h-4" />
                10ms
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Database latency</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </nav>
  );
};
