import { Toaster } from '@/components/ui/toaster';
import type { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <Toaster />
  </>
);

export default Layout;
