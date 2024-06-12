import { Link } from 'react-router-dom';

import styles from './AccountLink.module.scss';

const AccountLink = ({ isLoginPage }) => {
  return (
    <div className={styles.accountLink}>
      {isLoginPage ? (
        <span className={styles.accountText} >
          Already have an account? <Link to="/login">Log in</Link>.
        </span>
      ) : (
        <span className={styles.accountText}>
          Don`t have an account? <Link to="/signup">Sign up</Link>.
        </span>
      )}
    </div>
  );
};

export default AccountLink;