import { SpriteSVG } from '../../assets/icons/SpriteSVG';
import LogoutBtn from '../header/components/LogoutBtn/LogoutBtn';
import MobSideBar from './MobSideBar/MobSideBar';
import styles from './MobileMenu.module.scss';
const MobileMenu = ({ onClose }) => {
  return (
    <div className={styles.sectionMob}>
      <button
        className={styles.button}
        onClick={() => {
          onClose();
        }}
      >
        <SpriteSVG name="close" />
      </button>
      <MobSideBar />
      <LogoutBtn />
    </div>
  );
};

export default MobileMenu;
