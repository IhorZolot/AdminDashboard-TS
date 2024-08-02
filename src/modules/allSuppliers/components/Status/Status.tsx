import styles from './Status.module.scss';

interface IPropsStatus {
  isActive: boolean;
}

const Status = ({ isActive }: IPropsStatus) => {
  const statusClassName = isActive ? styles.active : styles.deactive;
  return (
    <div className={statusClassName}>{isActive ? 'Active' : 'Deactive'}</div>
  );
};

export default Status;
