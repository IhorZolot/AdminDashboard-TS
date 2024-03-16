import IncomeExpenses from '../../modules/dashboard/components/IncomeExpenses';
import RecentCustomers from '../../modules/dashboard/components/RecentCustomers';
import Statistics from '../../modules/dashboard/components/Statistics';
import styles from './DashboardPage.module.scss';

const DashboardPage = () => {
  return (
    <div className={styles.sectionDashbosrd}>
      <Statistics />
      <RecentCustomers />
      <IncomeExpenses />
    </div>
  );
};

export default DashboardPage;
