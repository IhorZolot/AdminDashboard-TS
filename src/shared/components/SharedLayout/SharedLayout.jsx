import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import SideBar from '../SideBar';
import Header from '../../../modules/header';
import styles from './SharedLayout.module.scss';
import useMedia from '../../../hooks/useMedia';

const SharedLayout = () => {
  const { isDesktop } = useMedia();
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
