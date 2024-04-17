import Button from '../../shared/components/Button';
import Input from '../../shared/components/InputFields/Input/Input';
import AllOrdersTab from './components/AllOrdersTab/AllOrdersTab';
import styles from './AllOrders.module.scss';
import { SpriteSVG } from '../../assets/icons/SpriteSVG';

const AllOrders = () => {
  return (
    <div className={styles.sectionOrders}>
      <div className={styles.sectorInput}>
        <Input placeholder="User Name" />
        <Button>
          <SpriteSVG name="filter" /> Filter
        </Button>
      </div>
      <AllOrdersTab />
    </div>
  );
};

export default AllOrders;
