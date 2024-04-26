import { useSelector } from 'react-redux';
import Action from '../Action/Action';
import styles from './AllSuppliersTab.module.scss';
import { selectFilteredSuppliers } from '../../../../redux/Suppliers/suppliersSlice';

const AllSuppliersTab = ({ onOpen }) => {
  const userSupplier = useSelector(selectFilteredSuppliers);
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
              <td>{row.status}</td>
              <td>
                <Action key="uniqueKey" onOpen={onOpen} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  // return <Table nameTable="All suppliers" headers={headers} rows={rows} />;
};

export default AllSuppliersTab;
