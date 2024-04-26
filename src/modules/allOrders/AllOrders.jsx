import { useDispatch } from 'react-redux';

import AllOrdersTab from './components/AllOrdersTab/AllOrdersTab';
import styles from './AllOrders.module.scss';
import UserFilter from '../../shared/components/Filter/UserFilter';
import { filterOrders } from '../../redux/Orders/sliceOrders';
import { useEffect } from 'react';
import { fetchOrders } from '../../redux/Orders/operations';

const AllOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  const applyFilter = (value) => {
    dispatch(filterOrders(value));
  };
  return (
    <div className={styles.sectionOrders}>
      <UserFilter placeholder="User Name" onFilter={applyFilter} />
      <AllOrdersTab />
    </div>
  );
};

export default AllOrders;
