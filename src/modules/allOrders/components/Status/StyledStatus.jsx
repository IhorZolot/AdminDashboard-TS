import styles from './StyledStatus.module.scss';

const StyledStatus = ({ status }) => {
  
  return <div className={styles[status.toLowerCase()]}>{status}</div>;
};

export default StyledStatus;
 