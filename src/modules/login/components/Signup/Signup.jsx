import clsx from 'clsx';
import '../../../../styles/container.scss';
import LogoPill from '../../../../assets/icons/LogoPill.svg';
import ResponsiveSVG from '../ResponsiveSVG/ResponsiveSVG';
import LoginLogo from '../LoginLogo/LoginLogo';
import SignupForm from '../SignupForm/SignupForm';
import styles from '../../Login.module.scss';

const Signup = () => {
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
          <SignupForm />
        </div>
      </div>
      <ResponsiveSVG />
    </div>
  );
};

export default Signup;
