import { useEffect, useState } from 'react';

import { SpriteSVG } from '@/assets/icons/SpriteSVG';
import styles from './Statistics.module.scss';
import { fetchDashboard } from '@/redux/Dashboard/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  selectCustomerCount,
  selectProductCount,
  selectSupplierCount,
} from '@/redux/Dashboard/dashboardSlice';

type SectorName = 'products' | 'suppliers' | 'customers';
const Statistics = () => {
  const [activeSector, setActiveSector] = useState<SectorName | null>(null);
  const productCount = useAppSelector(selectProductCount);
  const customerCount = useAppSelector(selectCustomerCount);
  const supplierCount = useAppSelector(selectSupplierCount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  const handleSectorClick = (sector: SectorName) => {
    setActiveSector(sector);
  };
  const sectors = [
    {
      name: 'products' as SectorName,
      title: 'All products',
      count: productCount,
      icon: 'products',
    },
    {
      name: 'suppliers' as SectorName,
      title: 'All suppliers',
      count: supplierCount,
      icon: 'users',
    },
    {
      name: 'customers' as SectorName,
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
            <SpriteSVG name={sector.icon} />
            <h3 className={styles.title}>{sector.title}</h3>
          </div>
          <span className={styles.sectorItem}>{sector.count}</span>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
