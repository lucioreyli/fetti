import type { FC } from 'react';
import { Button } from '../ui/button';
// @ts-expect-error
import Grid3x3 from 'lucide-react/dist/esm/icons/grid-3x3';

export const SchemasBar: FC = () => {
  return (
    <div className="flex-[0.15] p-6">
      <h2>Tables</h2>
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
    </div>
  );
};
