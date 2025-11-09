import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { PreFooterNav } from './PreFooterNav';

interface LayoutProps {
  children: React.ReactNode;
  showPreFooterNav?: boolean;
}

const Layout = ({ children, showPreFooterNav = false }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
