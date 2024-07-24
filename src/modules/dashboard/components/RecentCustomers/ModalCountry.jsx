import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { SpriteSVG } from '@/assets/icons/SpriteSVG';
import { fetchDashboard } from '@redux/Dashboard/operations';
import styles from './ModalCountry.module.scss';
import { useAppDispatch } from '@/redux/hooks';

const ModalCountry = ({ onClose, customer }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  return (
    <div className={styles.sectionModal}>
      <h2 className={styles.title}>Client Location</h2>
      <div>
        <div className={styles.sectionName}>
          <p className={styles.name}>
            <span className={styles.bold}>Name:</span>
            {customer.name}
          </p>
          <p className={styles.name}>
            <span className={styles.bold}>Country: </span> {customer.address}
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6214555.749148064!2d22.087201427932484!3d49.03646896428215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a9f5e07b524e7%3A0xf4e67b9448d67d4f!2z0JrRgNC10YHRgdC60LDRjyDQvtCx0LvQuNGP!5e0!3m2!1suk!2sua!4v1634249766369!5m2!1suk!2sua"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          className={styles.map}
        />
      </div>
      <button
        className={styles.spriteClose}
        onClick={() => {
          onClose();
        }}
      >
        <SpriteSVG name="close" width="16" height="16" />
      </button>
    </div>
  );
};

export default ModalCountry;
