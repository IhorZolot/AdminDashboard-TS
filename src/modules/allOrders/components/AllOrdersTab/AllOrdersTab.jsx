import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import Table from '../../../../shared/components/Table/Table';
// import Status from '../Status';
import { selectOrders } from '../../../../redux/Orders/sliceOrders';
import { fetchOrders } from '../../../../redux/Orders/operations';
import styles from './AllOrdersTab.module.scss';

const AllOrdersTab = () => {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  const nameTable = 'All Orders';
  const headers = [
    'User Info',
    'Address',
    'Products',
    'Order date',
    'Price',
    'Status',
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
          {orders.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <div>
                  <img width="40" src={row.photo} alt="img" />
                  {row.name}
                </div>
              </td>
              <td>{row.address}</td>
              <td>{row.products}</td>
              <td>{row.order_date}</td>
              <td>{row.price}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
//  <Table nameTable="All orders" headers={headers} rows={orders} />;
export default AllOrdersTab;
