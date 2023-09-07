import { LeftBar } from '@/components/LeftBar';
import { Button } from '@/components/ui/button';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="w-full flex">
      <LeftBar />
      <div>
        <Button>Entrar</Button>
      </div>
    </main>
  );
};

export default Home;
