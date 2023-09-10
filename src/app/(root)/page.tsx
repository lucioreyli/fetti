import type { NextPage } from 'next';
import { RegisterDatabase } from '@/components/RegisterDatabase';
import { Separator } from '@/components/ui/separator';
import { SavedDatabases } from '@/components/SavedDatabases';

const Home: NextPage = () => {
  const {} = process.env;
  return (
    <main className="w-full flex pt-2 h-screen overflow-clip">
      <div className="flex-1 h-screen justify-center overflow-scroll">
        <RegisterDatabase />
      </div>
      <Separator orientation="vertical" />
      <SavedDatabases />
    </main>
  );
};

export default Home;
