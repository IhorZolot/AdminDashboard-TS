import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SpriteSVG } from '@/assets/icons/SpriteSVG';
import styles from './Statistics.module.scss';
import { selectDashboard } from '@redux/Dashboard/dashboardSlice';
import { fetchDashboard } from '@redux/Dashboard/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Statistics = () => {
  const [activeSector, setActiveSector] = useState(null);
  const { productCount, customerCount, supplierCount } =
    useAppSelector(selectDashboard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  const handleSectorClick = (sector) => {
    setActiveSector(sector);
  };
  const sectors = [
    {
      name: 'products',
      title: 'All products',
      count: productCount,
      icon: 'products',
    },
    {
      name: 'suppliers',
      title: 'All suppliers',
      count: supplierCount,
      icon: 'users',
    },
    {
      name: 'customers',
      title: 'All customers',
      count: customerCount,
      icon: 'users',
    },
  ];
  return (
    <div className={styles.sectionStat}>
      {sectors.map((sector) => (
        <div
          className={`${styles.sectorStat} ${activeSector === sector.name ? styles.active : ''}`}
          key={sector.name}
          onClick={() => handleSectorClick(sector.name)}
        >
          <div className={styles.sectorTitle}>
            <SpriteSVG name={sector.icon} className={styles.SpriteSVG} />
            <h3 className={styles.title}>{sector.title}</h3>
          </div>
          <span className={styles.sectorItem}>{sector.count}</span>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
