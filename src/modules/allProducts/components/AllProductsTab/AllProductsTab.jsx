import DeleteButton from '../../../../shared/components/Button/DeleteButton/DeleteButton';
import EditButton from '../../../../shared/components/Button/EditButton/EditButton';
import Table from '../../../../shared/components/Table/Table';
import styles from './AllProductsTab.module.scss';

const AllProductsTab = ({ onOpen }) => {
  const headers = [
    'Product Info',
    'Category',
    'Stock',
    'Suppliers',
    'Price',
    'Action',
  ];
  const rows = [
    [
      'Moringa',
      'Medicine',
      '12',
      'Square',
      '89.66',
      <div key="uniqueKey" className={styles.action}>
        <EditButton
          onClick={() => {
            onOpen();
          }}
        />
        <DeleteButton />
      </div>,
    ],
  ];

  return <Table nameTable="All products" headers={headers} rows={rows} />;
};

export default AllProductsTab;
