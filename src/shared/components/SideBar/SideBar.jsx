import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.scss';
import { SpriteSideBar } from '../../../assets/icons/SpriteSideBar';
import sideLinkData from '../../data/side-link-data';

const SideBar = () => {
  return (
    <aside className={styles.navbar}>
      <nav>
        {sideLinkData.map((link, index) => (
          <NavLink key={index} to={link.path}>
            <div className={styles.iconContainer}>
              <SpriteSideBar
                name={link.name.toLowerCase()}
                className={styles.icon}
              />
            </div>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
