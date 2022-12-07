import { Outlet } from 'react-router-dom';
import { AppBarHead } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBarHead />
      {/*<div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>*/}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/*</div>*/}
    </>
  );
};