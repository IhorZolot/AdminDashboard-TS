import { SpriteSVG } from '../../../../assets/icons/SpriteSVG';
import styles from './DeleteButton.module.scss';

const DeleteButton = () => {
  return (
    <button className={styles.deleteButton}>
      <SpriteSVG name="trash" />
    </button>
  );
};

export default DeleteButton;
