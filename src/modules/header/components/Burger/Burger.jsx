import { SpriteSVG } from '../../../../assets/icons/SpriteSVG';
import styles from './Burger.module.scss';

const Burger = ({ onClick }) => {
  return (
    <button className={styles.burgerButton} onClick={onClick}>
      <SpriteSVG name="burger" />
    </button>
  );
};

export default Burger;
