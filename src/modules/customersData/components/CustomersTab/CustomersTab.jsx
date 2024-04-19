import { useEffect } from 'react';
import Table from '../../../../shared/components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../../../../redux/Customers/operations';
import { selectCustomers } from '../../../../redux/Customers/customerSlice';

const CustomersTab = () => {
  const customers = useSelector(selectCustomers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);
  const headers = ['User Info', 'Email', 'Address', 'Phone', 'Register date'];

  return (
    <Table nameTable="Customers Data" headers={headers} rows={customers} />
  );
};

export default CustomersTab;
