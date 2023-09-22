'use client';
import { useState, type FC, useEffect, useRef } from 'react';
import { Button, buttonVariants } from '../ui/button';
// @ts-expect-error
import Grid3x3 from 'lucide-react/dist/esm/icons/grid-3x3';
// @ts-expect-error
import Menu from 'lucide-react/dist/esm/icons/menu';
// @ts-expect-error
import Code from 'lucide-react/dist/esm/icons/code';
// @ts-expect-error
import LogOut from 'lucide-react/dist/esm/icons/log-out';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useConnectionsStore } from '@/store/connections';
import { getTablesName } from '@/services/get-tables-name';

export const SchemasBar: FC = () => {
  const connection = useRef(useConnectionsStore.getState().connection);
  const [tables, setTables] = useState<string[] | null>(null);

  useEffect(() => {
    const getDatabaseSchema = async () => {
      if (!connection.current) {
        return setTables([]);
      }
      const tables = await getTablesName(connection.current);
      setTables(tables);
    };
  }, []);

  return (
    <aside className="flex-[0.15] p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="mb-0 m-0">Tables</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" asChild>
              <div>
                <Menu className="w-4 h-4" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/*  <DropdownMenuLabel>Options</DropdownMenuLabel><DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              <Code className="w-4 h-4" />
              New Script
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="w-4 h-4" />
              Disconnect
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="space-y-1">
        {Array.isArray(tables) && tables.length === 0 && (
          <div className="w-full text-center">Tables not found</div>
        )}
        {tables?.map<React.ReactElement>((tableName, index) => (
          <Button
            key={tableName}
            variant={index ? 'ghost' : 'secondary'}
            className="w-full justify-start"
          >
            <Grid3x3 className="w-4 h-4 mr-2" />
            {tableName}
          </Button>
        ))}
      </div>
    </aside>
  );
};
