import { useNavigate } from 'react-router-dom';

import styles from './AccountLink.module.scss';

const AccountLink = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.centeredText}>
      {isLoggedIn ? (<div>
        Already have an account? <span onClick={() => navigate('/login')}>Log in</span>.
      </div>) : (<div>
        Don`t have an account? <span onClick={() => navigate('/signup')}>Sign up</span>.
      </div>)}
    </div>
  );
};

export default AccountLink;