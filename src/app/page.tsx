'use client';

import { Button } from '@/components/ui/button';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main>
      <h1>Fetti</h1>
      <h3>h3</h3>
      <Button asChild>
        <Link href="https://google.com" target="_blank" prefetch={false}>
          Entrar
        </Link>
      </Button>
    </main>
  );
};

export default Home;
