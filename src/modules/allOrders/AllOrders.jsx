import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import styles from './AllOrders.module.scss';

import UserFilter from '@/shared/components/Filter/UserFilter';
import {
  fetchOrdersThunk,
  fetchOrdersByFieldThunk,
} from '@/redux/Orders/operations';
import { Pagination } from '.@/shared/pagination/Pagination';
import {
  currentPageOrders,
  selectCurrentPage,
  selectPages,
} from '@/redux/Orders/sliceOrders';
import ScrollTable from '@/shared/scrollTable';
import AllOrdersTab from './components/AllOrdersTab';

const AllOrders = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectPages);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchOrdersThunk(currentPage));
  }, [dispatch, currentPage]);
  const applyFilter = (value) => {
    dispatch(fetchOrdersByFieldThunk(value));
  };
  const handlePageChange = (pageNumber) => {
    dispatch(currentPageOrders(pageNumber));
  };
  return (
    <div className={styles.sectionOrders}>
      <UserFilter placeholder="User Name" onFilter={applyFilter} />
      <ScrollTable>
        <AllOrdersTab />
      </ScrollTable>
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default AllOrders;
