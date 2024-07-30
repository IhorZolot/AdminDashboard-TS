import { NavLink } from 'react-router-dom';

import { SpriteSideBar } from '@assets/icons/SpriteSideBar';
import sideLinkData from '@shared/data/side-link-data';
import styles from './SideBar.module.scss';

const SideBar = () => {
  return (
    <aside className={styles.navbar}>
      <nav>
        {sideLinkData.map((link, index) => (
          <NavLink key={index} to={link.path}>
            <div className={styles.iconContainer}>
              <SpriteSideBar name={link.name.toLowerCase()} />
            </div>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
