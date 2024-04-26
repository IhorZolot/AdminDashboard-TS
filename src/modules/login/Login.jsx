import clsx from 'clsx';
import LoginForm from './components/LoginForm/LoginForm';
import '../../styles/container.scss';
import LogoPill from '../../assets/icons/LogoPill.svg';
import styles from './Login.module.scss';
import ResponsiveSVG from './components/ResponsiveSVG';
import LoginLogo from './components/LoginLogo';

const Login = () => {
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
        <LoginForm />
      </div>
      <ResponsiveSVG />
    </div>
  );
};

export default Login;
