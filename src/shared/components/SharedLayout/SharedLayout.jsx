import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../modules/header';
import SideBar from '../SideBar';
import styles from './SharedLayout.module.scss';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

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
