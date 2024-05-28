import { SpriteSVG } from '../../../../assets/icons/SpriteSVG';
import styles from './ActionButton.module.scss';
const ActionButton = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <SpriteSVG name="edit" /> Edit
    </button>
  );
};

export default ActionButton;
