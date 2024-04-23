import styles from './StyledStatus.module.scss';

const StyledStatus = ({ status }) => {
  const getStyledStatus = () => {
    switch (status) {
      case 'Completed':
        return styles.completed;
      case 'Confirmed':
        return styles.confirmed;
      case 'Pending':
        return styles.pending;
      case 'Cancelled':
        return styles.cancelled;
      case 'Shipped':
        return styles.shipped;
      case 'Delivered':
        return styles.delivered;
      default:
        return styles.processing;
    }
  };

  return <div className={getStyledStatus()}>{status}</div>;
};

export default StyledStatus;
