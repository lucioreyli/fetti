import { SchemasBar } from '@/components/SchemasBar';
import { Separator } from '@/components/ui/separator';
import type { NextPage } from 'next';

const Database: NextPage = () => {
  return (
    <main className="w-full flex pt-2 h-screen">
      <SchemasBar />
      <Separator orientation="vertical" />
    </main>
  );
};

export default Database;
