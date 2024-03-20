import { SpriteSVG } from '../../../../assets/icons/SpriteSVG';
import styles from './Action.module.scss';
const Action = ({ onOpen }) => {
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

export default Action;
