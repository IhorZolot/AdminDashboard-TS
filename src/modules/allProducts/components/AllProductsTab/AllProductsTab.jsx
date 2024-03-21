import Table from '../../../../shared/components/Table/Table';
import ActionsBottom from '../ActionsBottom/ActionsBottom';
import styles from './AllProductsTab.module.scss';

const AllProductsTab = ({ onOpen }) => {
  const handleClick = actionType => {
    onOpen(actionType);
  };
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
        <ActionsBottom onClick={handleClick} actionType="edit" />
        <ActionsBottom onClick={handleClick} actionType="delete" />
      </div>,
    ],
  ];

  return <Table nameTable="All products" headers={headers} rows={rows} />;
};

export default AllProductsTab;
