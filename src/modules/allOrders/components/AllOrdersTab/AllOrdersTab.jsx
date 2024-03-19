import Table from '../../../../shared/components/Table/Table';

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
      <div key="uniqueKey">Completed</div>,
    ],
  ];

  return <Table nameTable="All orders" headers={headers} rows={rows} />;
};

export default AllOrdersTab;
