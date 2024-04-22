import { useDispatch, useSelector } from 'react-redux';
import styles from './IncomeExpenses.module.scss';
import { selectIncomeExpensesResult } from '../../../../redux/Dashboard/dashboardSlice';
import { useEffect } from 'react';
import { fetchDashboard } from '../../../../redux/Dashboard/operations';
const IncomeExpenses = () => {
  const incomeExpenses = useSelector(selectIncomeExpensesResult);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);
  const nameTable = 'Income/Expenses';
  const headers = ['Today'];

  return (
    <div className={styles.sectionExpenses}>
      <h2 className={styles.titleExpenses}>{nameTable}</h2>
      <table className={styles.table}>
        <thead className={styles.theadExpenses}>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.dataExpenses}>
          {incomeExpenses !== undefined &&
            incomeExpenses.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.type}</td>
                <td>{row.name}</td>
                <td>{row.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeExpenses;
