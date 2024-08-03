import { BeatLoader } from 'react-spinners';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <BeatLoader color="#1bb353" />
    </div>
  );
};

export default Loader;
