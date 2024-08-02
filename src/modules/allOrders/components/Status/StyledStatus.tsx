import styles from './StyledStatus.module.scss';
interface IPropsStatus {
  status: string;
}
const StyledStatus = ({ status }: IPropsStatus) => {
  return <div className={styles[status.toLowerCase()]}>{status}</div>;
};

export default StyledStatus;
