import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import styles from './LogoutBtn.module.scss';

import { SpriteSideBar } from '@assets/icons/SpriteSideBar';
import { logoutThunk } from '@redux/Auth/operations';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk()).then(() => {
      toast.success('Logout successful!');
    });
  };
  return (
    <button onClick={handleLogout} className={styles.sectionBtn}>
      <SpriteSideBar name="logout" />
    </button>
  );
};

export default LogoutBtn;
