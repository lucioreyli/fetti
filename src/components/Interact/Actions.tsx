'use client';
import { useCodeStore } from '@/store/code-store';
import { Button } from '../ui/button';

export const Actions = () => {
  const code = useCodeStore((state) => state.code);

  return (
    <div className="ml-auto">
      {code}
      <Button>Run</Button>
    </div>
  );
};
