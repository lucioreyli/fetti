import { LeftBar } from '@/components/LeftBar';
import type { NextPage } from 'next';
import { RegisterDatabase } from '@/components/RegisterDatabase';
import { Separator } from '@/components/ui/separator';

const Home: NextPage = () => {
  const {} = process.env;
  return (
    <main className="w-full flex pt-2 h-screen overflow-clip">
      <div className="flex-1 h-screen justify-center overflow-scroll">
        <RegisterDatabase />
      </div>
      <Separator orientation="vertical" />
      <LeftBar />
    </main>
  );
};

export default Home;
