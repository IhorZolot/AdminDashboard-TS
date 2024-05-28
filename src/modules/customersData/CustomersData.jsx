import { useDispatch, useSelector } from 'react-redux';
import UserFilter from '../../shared/components/Filter/UserFilter';
import styles from './CustomersData.module.scss';
import CustomersTab from './components/CustomersTab';
import { useEffect } from 'react';
import {
  fetchCustomersThunk,
  filteredCustomersByFieldThunk,
} from '../../redux/Customers/operations';
import { Pagination } from '../../shared/pagination/Pagination';
import { currentPageCustomers } from '../../redux/Customers/customerSlice';

const CustomersData = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.customers.currentPage);

  const totalPages = useSelector((state) => state.customers.pages);

  useEffect(() => {
    dispatch(fetchCustomersThunk(currentPage));
  }, [dispatch, currentPage]);
  const applyFilter = (value) => {
    dispatch(filteredCustomersByFieldThunk(value));
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
