import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.scss';

const SideBar = () => {
  return (
    <aside className={styles.navbar}>
      <nav>
        <NavLink to="/" activeClassName={styles.active}>
          D
        </NavLink>
        <NavLink to="/dashboard" activeClassName={styles.active}>
          H
        </NavLink>
        <NavLink to="/orders" activeClassName={styles.active}>
          M
        </NavLink>
        <NavLink to="/products" activeClassName={styles.active}>
          R
        </NavLink>
        <NavLink to="/suppliers" activeClassName={styles.active}>
          Q
        </NavLink>
        <NavLink to="/customers" activeClassName={styles.active}>
          Y
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideBar;
