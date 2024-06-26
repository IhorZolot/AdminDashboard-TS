import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import ActionsBottom from '../ActionsBottom';
import styles from './AllProductsTab.module.scss';
import { selectProducts } from '@redux/Products/productSlice';
import { deleteProductThunk } from '@redux/Products/operations';
import ScrollTable from '@shared/scrollTable/ScrollTable';
import NoResultFound from '@shared/components/NoResultFound/NoResultFound';

const AllProductsTab = ({ onOpenEdit }) => {
  const dispatch = useDispatch();
  const userProduct = useSelector(selectProducts);

  const handleEdit = (product) => {
    onOpenEdit(product);
  };
  const handleDelete = (id) => {
    dispatch(deleteProductThunk(id)).then(() => {
      toast.success('Product deleted successfully');
    });
  };

  const nameTable = 'All products';
  const headers = [
    'Product Info',
    'Category',
    'Stock',
    'Suppliers',
    'Price',
    'Action',
  ];
  if (!Array.isArray(userProduct)) {
    return <div>Loading...</div>;
  }
  console.log(userProduct);

  return (
    <div className={styles.sectionTable}>
      <h2 className={styles.titleTable}>{nameTable}</h2>
      {userProduct.length === 0 ? (
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
          {userProduct.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                <td>{row.name}</td>
                <td>{row.category}</td>
                <td>{row.stock}</td>
                <td>{row.suppliers}</td>
                <td>{row.price}</td>
                <td>
                  <div className={styles.action}>
                    <ActionsBottom
                      onClick={() => handleEdit(row)}
                      actionType="edit"
                    />
                    <ActionsBottom onClick={() => handleDelete(row._id)} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </ScrollTable>
      )}
    </div>
  );
};

export default AllProductsTab;
