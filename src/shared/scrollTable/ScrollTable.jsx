import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import styles from './ScrollTable.module.scss';

const ScrollTable = ({ children }) => {
  return (
    <div className={styles.scrollBarContainer}>
      <SimpleBar forceVisible="x" autoHide={false} className={styles.simpleBar}>
        {children}
      </SimpleBar>
      <div className={styles.scrollContent}></div>
    </div>
  );
};

export default ScrollTable;
