import clsx from 'clsx';

import '../../../../styles/container.scss';
import LogoPill from '../../../../assets/icons/LogoPill.svg';
import styles from './Signup.module.scss';
import LoginLogo from '../LoginLogo';
import SignupForm from '../SignupForm';
// import ResponsiveSVG from '../ResponsiveSVG/ResponsiveSVG.jsx';

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
        <SignupForm />
      </div>
      {/* <ResponsiveSVG /> */}
    </div>
  );
};

export default Signup;
