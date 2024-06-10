import IncomeExpenses from '../../modules/dashboard/components/IncomeExpenses';
import { RecentCustomers } from '../../modules/dashboard/components/RecentCustomers';
import Statistics from '../../modules/dashboard/components/Statistics';
import ScrollTable from '../../shared/scrollTable/ScrollTable';
import styles from './DashboardPage.module.scss';

const DashboardPage = () => {
  return (
    <div className={styles.sectionDashboard}>
      <Statistics />
      <div className={styles.sectionTable}>
        <ScrollTable>
          <RecentCustomers />
        </ScrollTable>
        <IncomeExpenses />
      </div>
    </div>
  );
};

export default DashboardPage;
