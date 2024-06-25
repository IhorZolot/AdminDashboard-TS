import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import '../../styles/container.scss';

import styles from './Login.module.scss';
import LogoPill from '@/assets/icons/LogoPill.svg';
import SignupForm from './components/SignupForm';
import AccountLink from './components/AccountLink';
import OverlayLogin from './components/OverlayLogin';
import SigninForm from './components/SigninForm';
import Logo from './components/Logo';

const Login = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return (
    <div className={clsx(styles.loginSection, 'container')}>
      <Logo />
      <div className={styles.loginSectionStyle}>
        <div>
          <img src={LogoPill} alt="logoImg" className={styles.loginImg} />
          <h1 className={styles.loginTitle}>
            Your medication, delivered Say goodbye to all worries with us
          </h1>
        </div>
        <div>
          {isLoginPage ? <SigninForm /> : <SignupForm />}
        <AccountLink isLoginPage={!isLoginPage} />
        </div>
      </div>
     <OverlayLogin/>
    </div>
  );
};

export default Login;
