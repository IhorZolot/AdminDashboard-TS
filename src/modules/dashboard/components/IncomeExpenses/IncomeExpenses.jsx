import styles from './IncomeExpenses.module.scss';
const IncomeExpenses = () => {
  return (
    <div className={styles.sectionExpenses}>
      <h2 className={styles.titleExpenses}>Income/Expenses</h2>
      <table className={styles.table}>
        <thead className={styles.theadExpenses}>
          <tr>
            <th>Today</th>
          </tr>
        </thead>
        <tbody className={styles.dataExpenses}>
          <tr>
            <td>
              <button className={styles.button}>Income</button>
            </td>
            <td>Cruip.com Market Ltd 70 Wilson St London</td>
            <td>+249.88</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IncomeExpenses;
