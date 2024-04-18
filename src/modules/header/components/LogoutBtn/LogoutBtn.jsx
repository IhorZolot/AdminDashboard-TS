import { useDispatch } from 'react-redux';
import { SpriteSideBar } from '../../../../assets/icons/SpriteSideBar';
import styles from './LogoutBtn.module.scss';
import { logoutThunk } from '../../../../redux/Auth/operations';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(logoutThunk())}
      className={styles.sectionBtn}
    >
      <SpriteSideBar name="logout" />
    </button>
  );
};

export default LogoutBtn;
