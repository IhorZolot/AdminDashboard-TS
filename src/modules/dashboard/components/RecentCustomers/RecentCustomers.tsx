import { useEffect, useState } from 'react';

import styles from './RecentCustomers.module.scss';

import { selectCustomerCountAll } from '@redux/Dashboard/dashboardSlice';
import { fetchDashboard } from '@/redux/Dashboard/operations';
import useModal from '@hooks/useModal';
import ModalCountry from './ModalCountry';
import Modal from '@shared/components/Modal/Modal';
import ScrollTable from '@/shared/scrollTable/ScrollTable';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ICustomerDashboard } from '@/types/dashboard.types';

const RecentCustomers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomerDashboard>(
    {} as ICustomerDashboard
  );

  const customerCount = useAppSelector(selectCustomerCountAll);
  const [isOpenModal, open, close] = useModal();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);
  const nameTable = 'Recent Customers';
  const headers = ['Name', 'Email', 'Spent', 'Country'];
  return (
    <div className={styles.sectionCustomers}>
      <h2 className={styles.titleCustomers}>{nameTable}</h2>
      <ScrollTable>
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
                    <img width="30" src={row.image} alt="img" />
                    {row.name}
                  </div>
                </td>
                <td>{row.email}</td>
                <td>{row.spent}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => {
                      setSelectedCustomer(row);
                      open();
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollTable>
      {isOpenModal && (
        <Modal onClose={close}>
          <ModalCountry customer={selectedCustomer} onClose={close} />
        </Modal>
      )}
    </div>
  );
};

export default RecentCustomers;
