import { useSelector } from 'react-redux';
import styles from './CustomersTab.module.scss';
import { selectCustomers } from '../../../../redux/Customers/customerSlice';

const CustomersTab = () => {
  const userCustomers = useSelector(selectCustomers);

  const nameTable = 'Customers Data';
  const headers = ['User Info', 'Email', 'Address', 'Phone', 'Register date'];

  return (
    <div className={styles.sectionTable}>
      <h2 className={styles.titleTable}>{nameTable}</h2>
      <table className={styles.table}>
        <thead className={styles.theadTable}>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.dataTable}>
          {userCustomers.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <div>
                  <img width="40" src={row.image} alt="img" />
                  {row.name}
                </div>
              </td>
              <td>{row.email}</td>
              <td>{row.address}</td>
              <td>{row.phone}</td>
              <td>{row.register_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTab;
