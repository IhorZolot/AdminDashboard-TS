import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

import SideBar from '../SideBar';
import Header from '../../../modules/header';
import styles from './SharedLayout.module.scss';

const SharedLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <div className={clsx('container')}>
      <Header />
      <div className={styles.content}>
        {isDesktop && <SideBar />}
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
