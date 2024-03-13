import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../modules/header';
import SideBar from '../SideBar';
import styles from './SharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <SideBar />
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
