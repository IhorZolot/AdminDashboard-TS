import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import AllOrdersTab from './components/AllOrdersTab/AllOrdersTab';
import styles from './AllOrders.module.scss';
import UserFilter from '../../shared/components/Filter/UserFilter';
import { fetchOrders } from '../../redux/Orders/operations';
import {
  filterOrders,
  selectFilterValue,
  selectOrders,
} from '../../redux/Orders/sliceOrders';

const AllOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const filterValue = useSelector(selectFilterValue);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  const applyFilter = (value) => {
    dispatch(filterOrders(value));
  };
  return (
    <div className={styles.sectionOrders}>
      <UserFilter placeholder="User Name" onFilter={applyFilter} />
      <AllOrdersTab orders={orders} filterValue={filterValue} />
    </div>
  );
};

export default AllOrders;
