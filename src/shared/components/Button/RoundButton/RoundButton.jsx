import styles from './RoundButton.module.scss';

const RoundButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.sectionBtn}>
      {children}
    </button>
  );
};

export default RoundButton;
