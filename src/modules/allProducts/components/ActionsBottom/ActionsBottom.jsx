import { SpriteSVG } from '@/assets/icons/SpriteSVG';
import styles from './ActionsBottom.module.scss';

const ActionsBottom = ({ onClick, actionType }) => {
  const editButtonClass = `${actionType === 'edit' ? styles.editAction : styles.deleteAction}`;

  return (
    <button className={editButtonClass} onClick={onClick} type={actionType}>
      <SpriteSVG name={actionType === 'edit' ? 'edit' : 'trash'} />
    </button>
  );
};

export default ActionsBottom;
