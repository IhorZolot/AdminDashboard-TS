import { SpriteSideBar } from '../../../../assets/icons/SpriteSideBar';
import styles from './LogoutBtn.module.scss';

const LogoutBtn = () => {
  return (
    <button className={styles.sectionBtn}>
      <SpriteSideBar name="exit" />
    </button>
  );
};

export default LogoutBtn;
