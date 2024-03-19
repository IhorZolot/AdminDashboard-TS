import Table from '../../../../shared/components/Table/Table';
import Status from '../Status';

const AllOrdersTab = () => {
  const headers = [
    'User Info',
    'Address',
    'Products',
    'Order date',
    'Price',
    'Status',
  ];

  const rows = [
    [
      'Alex Shatov',
      'Mripur-1',
      '12',
      'July 31, 2023',
      '890.66',
      <Status key="uniqueKey" />,
    ],
  ];

  return <Table nameTable="All orders" headers={headers} rows={rows} />;
};

export default AllOrdersTab;
