import Table from '../../../../shared/components/Table/Table';
import Action from '../Action/Action';
import Status from '../Status/Status';

const AllSuppliersTab = ({ onOpen }) => {
  const headers = [
    'Suppliers Info',
    'Address',
    'Company',
    'Delivery date',
    'Ammount',
    'Status',
    'Action',
  ];
  const rows = [
    [
      'Alex Shatov',
      'Mripur-1',
      'Square',
      'August 1, 2023',
      '6952.53',
      <Status key="uniqueKey" />,
      <Action key="uniqueKey" onOpen={onOpen} />,
    ],
  ];
  return <Table nameTable="All suppliers" headers={headers} rows={rows} />;
};

export default AllSuppliersTab;
