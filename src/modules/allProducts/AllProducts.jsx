import { SpriteSVG } from '../../assets/icons/SpriteSVG';
import Button from '../../shared/components/Button/Button';
import RoundButton from '../../shared/components/Button/RoundButton/RoundButton';
import Input from '../../shared/components/InputFields/Input/Input';
import styles from './AllProducts.module.scss';
import AllProductsTab from './components/AllProductsTab';

const AllProducts = () => {
  return (
    <div className={styles.sectionProducts}>
      <div className={styles.sector}>
        <div className={styles.sectorIntut}>
          <Input placeholder="Product  Name" />
          <Button>
            <SpriteSVG name="filter" /> Filter
          </Button>
        </div>
        <div className={styles.addBlok}>
          <RoundButton>
            <SpriteSVG name="add" width="16px" height="16px" />
          </RoundButton>
          <p className={styles.text}>Add a new product</p>
        </div>
      </div>
      <AllProductsTab />
    </div>
  );
};

export default AllProducts;
