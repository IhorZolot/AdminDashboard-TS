import styles from './RecentCustomers.module.scss';

const RecentCustomers = () => {
  return (
    <div className={styles.sectionCustomers}>
      <h2 className={styles.titleCustomers}>Recent Customers</h2>
      <table className={styles.table}>
        <thead className={styles.theadCustomers}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Spent</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody className={styles.dataCustomers}>
          <tr>
            <td>Alex Shatov</td>
            <td>alexshatov@gmail.com</td>
            <td>2,890.66</td>
            <td>
              <button className={styles.button}>View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentCustomers;
