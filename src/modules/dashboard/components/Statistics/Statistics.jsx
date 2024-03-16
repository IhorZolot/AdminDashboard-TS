import { useState } from 'react';
import { SpriteSVG } from '../../../../assets/icons/SpriteSVG';
import styles from './Statistics.module.scss';

const Statistics = () => {
  const [activeSector, setActiveSector] = useState(null);

  const handleSectorClick = sector => {
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
        <span className={styles.sectorItem}>000</span>
      </div>
      <div
        className={`${styles.sectorStat} ${activeSector === 'suppliers' ? styles.active : ''}`}
        onClick={() => handleSectorClick('suppliers')}
      >
        <div className={styles.sectorTitle}>
          <SpriteSVG name="users" className={styles.SpriteSVG} />
          <h3 className={styles.title}>All suppliers</h3>
        </div>
        <span className={styles.sectorItem}>000</span>
      </div>
      <div
        className={`${styles.sectorStat} ${activeSector === 'customers' ? styles.active : ''}`}
        onClick={() => handleSectorClick('customers')}
      >
        <div className={styles.sectorTitle}>
          <SpriteSVG name="users" className={styles.SpriteSVG} />
          <h3 className={styles.title}>All customers</h3>
        </div>
        <span className={styles.sectorItem}>000</span>
      </div>
    </div>
  );
};

export default Statistics;
