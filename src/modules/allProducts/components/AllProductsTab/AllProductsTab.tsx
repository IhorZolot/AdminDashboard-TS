import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import ActionsBottom from '../ActionsBottom';
import styles from './AllProductsTab.module.scss';
import { selectProducts } from '@/redux/Products/productSlice';
import { deleteProductThunk } from '@/redux/Products/operations';
import ScrollTable from '@shared/scrollTable/ScrollTable';
import NoResultFound from '@shared/components/NoResultFound/NoResultFound';
import { IProduct } from '@/types/products.types';

interface IAllProductsTabProps {
  onOpenEdit: (product: IProduct) => void;
}

const AllProductsTab = ({ onOpenEdit }: IAllProductsTabProps) => {
  const dispatch = useAppDispatch();
  const userProduct = useAppSelector(selectProducts);

  const handleEdit = (product: IProduct) => {
    onOpenEdit(product);
  };
  const handleDelete = (id: string) => {
    dispatch(deleteProductThunk(id));
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
