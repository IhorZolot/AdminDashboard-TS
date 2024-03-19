import Table from '../../../../shared/components/Table';

const CustomersTab = () => {
  const headers = ['User Info', 'Email', 'Address', 'Phone', 'Register date'];
  const rows = [
    [
      'Alex Shatov',
      'alexshatov@gmail.com',
      'Mripur-1',
      '+8801736985253',
      'Aug 1, 2023',
    ],
  ];
  return <Table nameTable="Customers Data" headers={headers} rows={rows} />;
};

export default CustomersTab;
