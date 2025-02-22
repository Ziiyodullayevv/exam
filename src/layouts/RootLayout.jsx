import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className='min-h-[100vh]'>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
