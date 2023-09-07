import { LeftBar } from '@/components/LeftBar';
import type { NextPage } from 'next';
import { RegisterDatabase } from '@/components/RegisterDatabase';
import { Separator } from '@/components/ui/separator';

const Home: NextPage = () => {
  return (
    <main className="w-full flex pt-2 h-screen gap-0">
      <RegisterDatabase />
      <Separator orientation="vertical" />
      <LeftBar />
    </main>
  );
};

export default Home;
