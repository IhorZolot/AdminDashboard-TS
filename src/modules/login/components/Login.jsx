import clsx from 'clsx';
import Logo from '../../../shared/components/Logo';
import LoginForm from './loginForm/LoginForm';
import '../../../styles/container.scss';
import LogoPill from '../../../assets/icons/LogoPill.svg';
import styles from './Login.module.scss';
import ResponsiveSVG from './responsiveSVG/ResponsiveSVG';

const Login = () => {
  return (
    <div className={clsx(styles.loginSection, 'container')}>
      <Logo />
      <div className={styles.loginSectionStyle}>
        <div>
          <img src={LogoPill} alt="logoImg" className={styles.loginImg} />
          <h1 className={styles.loginTitle}>
            Your medication, delivered Say goodbye to all
            <span className={styles.loginTitleSpan}>your healthcare</span>{' '}
            worries with us
          </h1>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
      <ResponsiveSVG />
    </div>
  );
};

export default Login;
