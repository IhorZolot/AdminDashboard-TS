import { useDispatch } from 'react-redux';
import UserFilter from '../../shared/components/Filter/UserFilter';
import styles from './CustomersData.module.scss';
import CustomersTab from './components/CustomersTab';
import { useEffect } from 'react';
import { fetchCustomers } from '../../redux/Customers/operations';
import { filterCustomers } from '../../redux/Customers/customerSlice';

const CustomersData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);
  const applyFilter = (value) => {
    dispatch(filterCustomers(value));
  };
  return (
    <div className={styles.section}>
      <UserFilter placeholder="User Name" onFilter={applyFilter} />
      <CustomersTab />
    </div>
  );
};

export default CustomersData;
