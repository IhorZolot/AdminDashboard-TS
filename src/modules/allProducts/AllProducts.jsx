import { SpriteSVG } from '../../assets/icons/SpriteSVG';
import useModal from '../../hooks/useModal';
import Button from '../../shared/components/Button/Button';
import RoundButton from '../../shared/components/Button/RoundButton/RoundButton';
import Input from '../../shared/components/InputFields/Input/Input';
import Modal from '../../shared/components/Modal/Modal';
import styles from './AllProducts.module.scss';
import AllProductsTab from './components/AllProductsTab';
import AddProductModal from './components/ProductModal/AddProductModal/AddProductModal';
import EditProductModal from './components/ProductModal/EditProductModal/EditProductModal';

const AllProducts = () => {
  const [isOpenAddModal, openAdd, closeAdd] = useModal();
  const [isOpenEditModal, openEdit, closeEdit] = useModal();
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
          <RoundButton
            onClick={() => {
              openAdd();
            }}
          >
            <SpriteSVG name="add" width="16px" height="16px" />
          </RoundButton>
          <p className={styles.text}>Add a new product</p>
        </div>
      </div>
      <AllProductsTab onOpen={openEdit} />
      {isOpenAddModal && (
        <Modal onClose={closeAdd}>
          <AddProductModal />
        </Modal>
      )}
      {isOpenEditModal && (
        <Modal onClose={closeEdit}>
          <EditProductModal />
        </Modal>
      )}
    </div>
  );
};

export default AllProducts;
