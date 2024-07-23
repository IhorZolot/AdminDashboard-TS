import { useSelector } from 'react-redux';

import styles from './CustomersTab.module.scss';
import { selectCustomers } from '@redux/Customers/customerSlice';
import ScrollTable from '@shared/scrollTable/ScrollTable';
import NoResultFound from '@shared/components/NoResultFound/NoResultFound';
import { useAppSelector } from '@/redux/hooks';

const CustomersTab = () => {
  const userCustomers = useAppSelector(selectCustomers);

  const nameTable = 'Customers Data';
  const headers = ['User Info', 'Email', 'Address', 'Phone', 'Register date'];

  return (
    <div className={styles.sectionTable}>
      <h2 className={styles.titleTable}>{nameTable}</h2>
      {userCustomers.length === 0 ? (
        <NoResultFound />
      ) : (
        <ScrollTable>
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
                      <img width="20" src={row.image} alt="img" />
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
        </ScrollTable>
      )}
    </div>
  );
};

export default CustomersTab;
