import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Action from '../Action/Action';
import Status from '../Status/Status';
import styles from './AllSuppliersTab.module.scss';
import { selectSuppliers } from '../../../../redux/Suppliers/suppliersSlice';
import { fetchSuppliers } from '../../../../redux/Suppliers/operations';

const AllSuppliersTab = ({ onOpen }) => {
  const suppliers = useSelector(selectSuppliers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);
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
          {suppliers.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <div>{row.name}</div>
              </td>
              <td>{row.address}</td>
              <td>{row.suppliers}</td>
              <td>{row.date}</td>
              <td>
                <Status key="uniqueKey" />
              </td>
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
