import clsx from 'clsx';
import IncomeExpenses from '../../modules/dashboard/components/IncomeExpenses';
import RecentCustomers from '../../modules/dashboard/components/RecentCustomers';
import Statistics from '../../modules/dashboard/components/Statistics';
import styles from './DashboardPage.module.scss';

const DashboardPage = () => {
  return (
    <div className={clsx(styles.sectionDashboard, 'container')}>
      <Statistics />
      <div className={styles.sectionTable}>
        <RecentCustomers />
        <IncomeExpenses />
      </div>
    </div>
  );
};

export default DashboardPage;
