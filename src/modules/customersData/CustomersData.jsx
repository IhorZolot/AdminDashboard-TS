import { SpriteSVG } from '../../assets/icons/SpriteSVG';
import Button from '../../shared/components/Button/Button';
import Input from '../../shared/components/InputFields/Input/Input';
import styles from './CustomersData.module.scss';
import CustomersTab from './components/CustomersTab';

const CustomersData = () => {
  return (
    <div className={styles.section}>
      <div className={styles.sector}>
        <Input placeholder="User Name" />
        <Button>
          <SpriteSVG name="filter" /> Filter
        </Button>
      </div>
      <CustomersTab />
    </div>
  );
};

export default CustomersData;
