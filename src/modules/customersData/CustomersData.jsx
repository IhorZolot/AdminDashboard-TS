import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import UserFilter from '@shared/components/Filter/UserFilter';
import styles from './CustomersData.module.scss';
import CustomersTab from './components/CustomersTab';
import {
  fetchCustomersThunk,
  filteredCustomersByFieldThunk,
} from '@redux/Customers/operations';
import  Pagination  from '@/shared/pagination';
import { currentPageCustomers } from '@redux/Customers/customerSlice';

const CustomersData = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.customers.currentPage);
  const totalPages = useSelector((state) => state.customers.pages);

  useEffect(() => {
    dispatch(fetchCustomersThunk(currentPage));
  }, [dispatch, currentPage]);
  const applyFilter = async (value) => {
   const results = await dispatch(filteredCustomersByFieldThunk(value)).unwrap();
    return results;
  };

  const handlePageChange = (pageNumber) => {
    dispatch(currentPageCustomers(pageNumber));
  };
  return (
    <div className={styles.section}>
      <UserFilter placeholder="User Name" onFilter={applyFilter} />
        <CustomersTab />
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default CustomersData;
