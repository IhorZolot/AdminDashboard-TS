import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import '../../styles/container.scss';
import styles from './Login.module.scss';
import LogoPill from '@/assets/icons/LogoPill.svg';
import ResponsiveSVG from './components/ResponsiveSVG';
import LoginLogo from './components/LoginLogo';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
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
        <AccountLink isLoginPage={!isLoginPage} />
        </div>
      </div>
      <ResponsiveSVG />
    </div>
  );
};

export default Login;
