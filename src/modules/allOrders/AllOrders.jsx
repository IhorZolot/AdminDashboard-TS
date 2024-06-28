import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import styles from './AllOrders.module.scss';

import UserFilter from '@/shared/components/Filter/UserFilter';
import {
  fetchOrdersThunk,
  fetchOrdersByFieldThunk,
} from '@/redux/Orders/operations';
import Pagination from '@/shared/pagination';
import {
  currentPageOrders,
  selectCurrentPage,
  selectPages,
} from '@/redux/Orders/sliceOrders';
import AllOrdersTab from './components/AllOrdersTab';

const AllOrders = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectPages);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchOrdersThunk(currentPage));
  }, [dispatch, currentPage]);
  const applyFilter = async (value) => {
    const results = await dispatch(fetchOrdersByFieldThunk(value));
    return results;
  };
  const handlePageChange = (pageNumber) => {
    dispatch(currentPageOrders(pageNumber));
  };
  return (
    <div className={styles.sectionOrders}>
      <UserFilter placeholder="User Name" onFilter={applyFilter} />
        <AllOrdersTab />
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />
    </div>
  );
};

export default AllOrders;
