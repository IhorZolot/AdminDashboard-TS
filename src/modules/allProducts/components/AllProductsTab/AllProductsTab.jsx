import Table from '../../../../shared/components/Table/Table';
import Action from '../Action/Action';

const AllProductsTab = () => {
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
      <Action key="uniqueKey" />,
    ],
  ];

  return <Table nameTable="All products" headers={headers} rows={rows} />;
};

export default AllProductsTab;
