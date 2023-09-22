import { Interact } from '@/components/Interact';
import { SchemasBar } from '@/components/SchemasBar';
import { Separator } from '@/components/ui/separator';
import type { NextPage } from 'next';

const Database: NextPage = (props) => {
  console.log('deu', props);
  return (
    <main className="w-full flex h-screen">
      <SchemasBar />
      <Separator orientation="vertical" />
      <Interact />
    </main>
  );
};

export default Database;
