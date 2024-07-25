import { SpriteSVG } from '@/assets/icons/SpriteSVG';
import styles from './ActionsBottom.module.scss';

interface IActionsBottomProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  actionType?: 'edit' | 'delete';
}

const ActionsBottom: React.FC<IActionsBottomProps> = ({
  onClick,
  actionType,
}) => {
  const editButtonClass = `${actionType === 'edit' ? styles.editAction : styles.deleteAction}`;

  return (
    <button className={editButtonClass} onClick={onClick}>
      <SpriteSVG name={actionType === 'edit' ? 'edit' : 'trash'} />
    </button>
  );
};

export default ActionsBottom;
