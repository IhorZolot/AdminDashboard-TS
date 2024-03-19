import { SpriteSVG } from '../../assets/icons/SpriteSVG';
import Button from '../../shared/components/Button/Button';
import Input from '../../shared/components/InputFields/Input/Input';
import styles from './AllSuppliers.module.scss';
import AddSuppliers from './components/AddSuppliers/AddSuppliers';
import AllSuppliersTab from './components/AllSuppliersTab/AllSuppliersTab';

const AllSuppliers = () => {
  return (
    <div className={styles.section}>
      <div className={styles.sector}>
        <div className={styles.sectorIntut}>
          <Input placeholder="User Name" />
          <Button>
            <SpriteSVG name="filter" /> Filter
          </Button>
        </div>
        <AddSuppliers />
      </div>
      <AllSuppliersTab />
    </div>
  );
};

export default AllSuppliers;
