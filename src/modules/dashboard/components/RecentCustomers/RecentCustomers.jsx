import { useDispatch, useSelector } from 'react-redux';
import styles from './RecentCustomers.module.scss';
import { selectCustomerCountAll } from '../../../../redux/Dashboard/dashboardSlice';
import { useEffect } from 'react';
import { fetchDashboard } from '../../../../redux/Dashboard/operations';

const RecentCustomers = () => {
  const customerCount = useSelector(selectCustomerCountAll);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);
  const nameTable = 'Recent Customers';
  const headers = ['Name', 'Email', 'Spent', 'Country'];
  return (
    <div className={styles.sectionCustomers}>
      <h2 className={styles.titleCustomers}>{nameTable}</h2>
      <table className={styles.table}>
        <thead className={styles.theadCustomers}>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.dataCustomers}>
          {customerCount.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <div>
                  <img width="40" src={row.image} alt="img" />
                  {row.name}
                </div>
              </td>
              <td>{row.email}</td>
              <td>{row.spent}</td>
              <td>
                <button className={styles.button}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentCustomers;
