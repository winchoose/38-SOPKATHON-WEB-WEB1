import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <main className="px-4 pb-4">{children}</main>
    </div>
  );
};

export default Layout;
