import { useNavigate } from 'react-router-dom';
import LogoIcon from '../../../../assets/icons/LogoIcon.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className={styles.logo} onClick={handleClick}>
      <img src={LogoIcon} alt="Logo" className={styles.logoIcon} />
    </div>
  );
};

export default Logo;
