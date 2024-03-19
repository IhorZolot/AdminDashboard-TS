import styles from './Status.module.scss';

const Status = ({ isActive }) => {
  const statusClassName = isActive ? styles.active : styles.deactive;
  return (
    <div className={statusClassName}>{isActive ? 'Active' : 'Deactive'}</div>
  );
};

export default Status;
