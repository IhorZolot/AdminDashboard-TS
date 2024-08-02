import { useEffect } from 'react';

import styles from './IncomeExpenses.module.scss';
import { selectIncomeExpensesResult } from '@redux/Dashboard/dashboardSlice';
import { fetchDashboard } from '@/redux/Dashboard/operations';
import { getRowStyle, getAmountStyle } from './StylesUtils';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
const IncomeExpenses = () => {
  const nameTable = 'Income/Expenses';
  const headers = ['Today'];
  const incomeExpenses = useAppSelector(selectIncomeExpensesResult);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  return (
    <div className={styles.sectionExpenses}>
      <h2 className={styles.titleExpenses}>{nameTable}</h2>
      <table className={styles.table}>
        <thead className={styles.theadExpenses}>
          <tr>
            {headers?.map((header, index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>
        <tbody className={styles.dataExpenses}>
          {incomeExpenses?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <div className={getRowStyle(row.type)}> {row.type}</div>
              </td>
              <td>{row.name}</td>
              <td>
                <a className={getAmountStyle(row.type)}>
                  {row.amount >= 0 ? `+${row.amount}` : row.amount}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeExpenses;
