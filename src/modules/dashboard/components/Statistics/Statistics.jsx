import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SpriteSVG } from '@assets/icons/SpriteSVG';
import styles from './Statistics.module.scss';
import { selectDashboard } from '@redux/Dashboard/dashboardSlice';
import { fetchDashboard } from '@redux/Dashboard/operations';

const Statistics = () => {
  const [activeSector, setActiveSector] = useState(null);
  const dispatch = useDispatch();
  const { productCount, customerCount, supplierCount } =
    useSelector(selectDashboard);
  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  const handleSectorClick = (sector) => {
    setActiveSector(sector);
  };
  return (
    <div className={styles.sectionStat}>
      <div
        className={`${styles.sectorStat} ${activeSector === 'products' ? styles.active : ''}`}
        onClick={() => handleSectorClick('products')}
      >
        <div className={styles.sectorTitle}>
          <SpriteSVG name="products" className={styles.SpriteSVG} />
          <h3 className={styles.title}>All products</h3>
        </div>
        <span className={styles.sectorItem}>{productCount}</span>
      </div>
      <div
        className={`${styles.sectorStat} ${activeSector === 'suppliers' ? styles.active : ''}`}
        onClick={() => handleSectorClick('suppliers')}
      >
        <div className={styles.sectorTitle}>
          <SpriteSVG name="users" className={styles.SpriteSVG} />
          <h3 className={styles.title}>All suppliers</h3>
        </div>
        <span className={styles.sectorItem}>{supplierCount}</span>
      </div>
      <div
        className={`${styles.sectorStat} ${activeSector === 'customers' ? styles.active : ''}`}
        onClick={() => handleSectorClick('customers')}
      >
        <div className={styles.sectorTitle}>
          <SpriteSVG name="users" className={styles.SpriteSVG} />
          <h3 className={styles.title}>All customers</h3>
        </div>
        <span className={styles.sectorItem}>{customerCount}</span>
      </div>
    </div>
  );
};

export default Statistics;
