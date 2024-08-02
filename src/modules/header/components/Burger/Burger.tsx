import { SpriteSVG } from '@/assets/icons/SpriteSVG';
import styles from './Burger.module.scss';

interface IBurgerProps {
  onClick: () => void;
}

const Burger = ({ onClick }: IBurgerProps) => {
  return (
    <button className={styles.burgerButton} onClick={onClick}>
      <SpriteSVG name="burger" />
    </button>
  );
};

export default Burger;
