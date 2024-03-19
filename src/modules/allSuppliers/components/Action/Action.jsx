import { SpriteSVG } from '../../../../assets/icons/SpriteSVG';
import styles from './Action.module.scss';
const Action = () => {
  return (
    <div className={styles.action}>
      <SpriteSVG name="edit" /> Edit
    </div>
  );
};

export default Action;
