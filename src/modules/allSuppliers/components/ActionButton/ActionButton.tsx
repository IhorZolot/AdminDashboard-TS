import { SpriteSVG } from '@/assets/icons/SpriteSVG';
import styles from './ActionButton.module.scss';
interface IActionButtonProps {
  onClick: () => void;
}
const ActionButton = ({ onClick }: IActionButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <SpriteSVG name="edit" /> Edit
    </button>
  );
};

export default ActionButton;
