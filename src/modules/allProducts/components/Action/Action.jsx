import DeleteButton from '../../../../shared/components/Button/DeleteButton/DeleteButton';
import EditButton from '../../../../shared/components/Button/EditButton/EditButton';
import styles from './Action.module.scss';

const Action = () => {
  return (
    <div className={styles.action}>
      <EditButton />
      <DeleteButton />
    </div>
  );
};

export default Action;
