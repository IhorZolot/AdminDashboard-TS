import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import '../../styles/container.scss';
import LogoPill from '../../assets/icons/LogoPill.svg';
import styles from './Login.module.scss';
import LoginLogo from './components/LoginLogo';
import LoginForm from './components/LoginForm';
import ResponsiveSVG from './components/ResponsiveSVG';
import SignupForm from './components/SignupForm/SignupForm';
import AccountLink from './components/AccountLink';

const Login = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return (
    <div className={clsx(styles.loginSection, 'container')}>
      <LoginLogo />
      <div className={styles.loginSectionStyle}>
        <div>
          <img src={LogoPill} alt="logoImg" className={styles.loginImg} />
          <h1 className={styles.loginTitle}>
            Your medication, delivered Say goodbye to all worries with us
          </h1>
        </div>
        <div>
          {isLoginPage ? <LoginForm /> : <SignupForm />}
        <AccountLink isLoggedIn={!isLoginPage} />
        </div>
      </div>
      <ResponsiveSVG />
    </div>
  );
};

export default Login;
