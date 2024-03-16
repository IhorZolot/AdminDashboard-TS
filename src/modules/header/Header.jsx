import Logo from './components/Logo';
import LogoutBtn from './components/LogoutBtn/LogoutBtn';
import Title from './components/Title';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionTitle}>
        <Logo />
        <Title />
      </div>
      <LogoutBtn />
    </div>
  );
};

export default Header;
