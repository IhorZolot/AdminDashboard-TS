import { useSelector } from 'react-redux';
import styles from './AllSuppliersTab.module.scss';
import { selectSuppliers } from '../../../../redux/Suppliers/suppliersSlice';
import Status from '../Status/Status';
import ActionButton from '../ActionButton';

const AllSuppliersTab = ({ onOpen }) => {
  const userSupplier = useSelector(selectSuppliers);
  const nameTable = 'All suppliers';
  const headers = [
    'Suppliers Info',
    'Address',
    'Company',
    'Delivery date',
    'Status',
    'Action',
  ];
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
          {userSupplier.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <div>{row.name}</div>
              </td>
              <td>{row.address}</td>
              <td>{row.suppliers}</td>
              <td>{row.date}</td>
              <td>
                <Status
                  key="uniqueKey"
                  isActive={row.status === 'Active' ? true : false}
                />
              </td>
              <td>
                <ActionButton key="uniqueKey" onOpen={onOpen} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSuppliersTab;
