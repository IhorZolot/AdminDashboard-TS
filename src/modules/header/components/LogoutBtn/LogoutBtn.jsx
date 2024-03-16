import { SpriteSideBar } from '../../../../assets/icons/SpriteSideBar';
import styles from './LogoutBtn.module.scss';

const LogoutBtn = () => {
  return (
    <div className={styles.sectionBtn}>
      <SpriteSideBar name="exit" className={styles.IconBtn} />
    </div>
  );
};

export default LogoutBtn;
