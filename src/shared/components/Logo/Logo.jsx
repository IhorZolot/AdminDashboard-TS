import styles from './Logo.module.scss';
import LogoIcon from '../../../assets/icons/LogoIcon.svg';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoImage} src={LogoIcon} alt="Logo" />
      <h1 className={styles.logoTitle}>E-Pharmacy</h1>
    </div>
  );
};

export default Logo;
