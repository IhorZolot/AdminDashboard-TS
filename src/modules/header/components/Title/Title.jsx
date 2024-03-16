import { useLocation } from 'react-router-dom';
import { SpriteSVG } from '../../../../assets/icons/SpriteSVG';
import styles from './Title.module.scss';
import sideLinkData from '../../../../shared/data/side-link-data';

const Title = () => {
  const location = useLocation();
  const currentPage = sideLinkData.find(
    link => link.path === location.pathname
  );
  return (
    <div>
      <h1 className={styles.titleHeader}>Medicine store</h1>
      <div className={styles.textSection}>
        <span>{currentPage ? currentPage.name : 'Unknown Page'}</span>
        <SpriteSVG name="pipe" />
        <span>test@test.com</span>
      </div>
    </div>
  );
};

export default Title;
