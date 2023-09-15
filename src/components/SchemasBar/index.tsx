import type { FC } from 'react';
import { Button } from '../ui/button';
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export const SchemasBar: FC = () => {
  return (
    <aside className="flex-[0.15] p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="mb-0 m-0">Tables</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              <Menu className="w-4 h-4" />
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
        <Button variant="secondary" className="w-full justify-start">
          <Grid3x3 className="w-4 h-4 mr-2" />
          users
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Grid3x3 className="w-4 h-4 mr-2" />
          tasks
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Grid3x3 className="w-4 h-4 mr-2" />
          user_profile
        </Button>
      </div>
    </aside>
  );
};
