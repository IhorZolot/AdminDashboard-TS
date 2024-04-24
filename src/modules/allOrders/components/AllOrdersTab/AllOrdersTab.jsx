// import Table from '../../../../shared/components/Table/Table';
import styles from './AllOrdersTab.module.scss';
import StyledStatus from '../Status/StyledStatus';

const AllOrdersTab = ({ orders, filterValue }) => {
  const filteredOrders = orders.filter(
    (order) =>
      order.name && order.name.toLowerCase().includes(filterValue.toLowerCase())
  );
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
          {filteredOrders.map((row, rowIndex) => (
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
              <td>
                <StyledStatus status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
//  <Table nameTable="All orders" headers={headers} rows={orders} />;
export default AllOrdersTab;
