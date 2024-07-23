import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import styles from './AllSuppliersTab.module.scss';

import { selectSuppliers } from '@redux/Suppliers/suppliersSlice';
import ScrollTable from '@shared/scrollTable/ScrollTable';
import ActionButton from '../ActionButton';
import Status from '../Status';
import NoResultFound from '@shared/components/NoResultFound/NoResultFound';
import { useAppSelector } from '@/redux/hooks';

const AllSuppliersTab = ({ onOpen }) => {
  const userSupplier = useAppSelector(selectSuppliers);
  const nameTable = 'All suppliers';
  const headers = [
    'Suppliers Info',
    'Address',
    'Company',
    'Delivery date',
    'Amount',
    'Status',
    'Action',
  ];
  const handleEdit = (supplier) => {
    onOpen(supplier);
  };
  const formatDate = (dateString) => {
    return format(new Date(dateString), 'dd MMMM yyyy');
  };
  return (
    <div className={styles.sectionTable}>
      <h2 className={styles.titleTable}>{nameTable}</h2>
      {userSupplier.length === 0 ? (
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
              {userSupplier.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>
                    <div>{row.name}</div>
                  </td>
                  <td>{row.address}</td>
                  <td>{row.suppliers}</td>
                  <td>{formatDate(row.date)}</td>
                  <td>{row.amount}</td>
                  <td>
                    <Status
                      key={`status-${rowIndex}`}
                      isActive={row.status === 'Active'}
                    />
                  </td>
                  <td>
                    <ActionButton
                      key={`action-${rowIndex}`}
                      onClick={() => handleEdit(row)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollTable>
      )}
    </div>
  );
};

export default AllSuppliersTab;
