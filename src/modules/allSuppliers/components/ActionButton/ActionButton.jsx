import { SpriteSVG } from '../../../../assets/icons/SpriteSVG';
import styles from './ActionButton.module.scss';
const ActionButton = ({ onOpen }) => {
  return (
    <button
      className={styles.action}
      onClick={() => {
        onOpen();
      }}
    >
      <SpriteSVG name="edit" /> Edit
    </button>
  );
};

export default ActionButton;
