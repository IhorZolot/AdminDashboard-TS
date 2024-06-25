import { SpriteSVG } from '@assets/icons/SpriteSVG';
import styles from './ActionsBottom.module.scss';

const ActionsBottom = ({ onClick, actionType }) => {
  const editButtonClass = `${actionType === 'edit' ? styles.editAction : styles.deleteAction}`;

  return (
    <button className={editButtonClass} onClick={onClick} type={actionType}>
      {actionType === 'edit' ? (
        <SpriteSVG name="edit" width="16" height="16" />
      ) : (
        <SpriteSVG name="trash" />
      )}
    </button>
  );
};

export default ActionsBottom;
