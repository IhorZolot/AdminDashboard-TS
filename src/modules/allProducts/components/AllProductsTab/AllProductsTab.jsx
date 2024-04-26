// import Table from '../../../../shared/components/Table/Table';
import { useSelector } from 'react-redux';
import ActionsBottom from '../ActionsBottom/ActionsBottom';
import styles from './AllProductsTab.module.scss';
import { selectFilteredProducts } from '../../../../redux/Products/productSlice';

const AllProductsTab = ({ onOpen }) => {
  const userProduct = useSelector(selectFilteredProducts);
  const nameTable = 'All products';
  const headers = [
    'Product Info',
    'Category',
    'Stock',
    'Suppliers',
    'Price',
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
          {userProduct.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.name}</td>
              <td>{row.category}</td>
              <td>{row.stock}</td>
              <td>{row.suppliers}</td>
              <td>{row.price}</td>
              <td>
                <div key="uniqueKey" className={styles.action}>
                  <ActionsBottom
                    onClick={() => onOpen('edit')}
                    actionType="edit"
                  />
                  <ActionsBottom actionType="delete" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  // return <Table nameTable="All products" headers={headers} rows={rows} />;
};

export default AllProductsTab;
