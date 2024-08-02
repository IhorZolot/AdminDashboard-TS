import { useAppDispatch, useAppSelector } from '@/redux/hooks';
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
  const dispatch = useAppDispatch();
  const totalPages = useAppSelector(selectPages);
  const currentPage = useAppSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchOrdersThunk());
  }, [dispatch, currentPage]);
  const applyFilter = async (value: string) => {
    const results = await dispatch(fetchOrdersByFieldThunk(value));
    return results;
  };
  const handlePageChange = (pageNumber: number) => {
    dispatch(currentPageOrders(pageNumber));
  };
  return (
    <div className={styles.sectionOrders}>
      <UserFilter placeholder="User Name" onFilter={applyFilter} />
      <AllOrdersTab />
      <Pagination
        totalPages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default AllOrders;
