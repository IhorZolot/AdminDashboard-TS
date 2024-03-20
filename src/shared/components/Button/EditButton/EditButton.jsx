import { SpriteSVG } from '../../../../assets/icons/SpriteSVG';
import styles from './EditButton.module.scss';

const EditButton = ({ onClick }) => {
  return (
    <button className={styles.editButton} onClick={onClick}>
      <SpriteSVG name="edit" width="16" height="16" />
    </button>
  );
};

export default EditButton;
