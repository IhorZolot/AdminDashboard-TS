import { useDispatch } from 'react-redux';
import { SpriteSVG } from '../../assets/icons/SpriteSVG';
import useModal from '../../hooks/useModal';
import RoundButton from '../../shared/components/Button/RoundButton/RoundButton';
import UserFilter from '../../shared/components/Filter/UserFilter';
import Modal from '../../shared/components/Modal/Modal';
import styles from './AllProducts.module.scss';
import AllProductsTab from './components/AllProductsTab';
import AddProductModal from './components/ProductModal/AddProductModal/AddProductModal';
import EditProductModal from './components/ProductModal/EditProductModal/EditProductModal';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/Products/operations';
import { filterProducts } from '../../redux/Products/productSlice';

const AllProducts = () => {
  const [isOpenAddModal, openAdd, closeAdd] = useModal();
  const [isOpenEditModal, openEdit, closeEdit] = useModal();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const applyFilter = (value) => {
    dispatch(filterProducts(value));
  };
  return (
    <div className={styles.sectionProducts}>
      <div className={styles.sector}>
        <UserFilter placeholder="Product Name" onFilter={applyFilter} />

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
          <AddProductModal onClose={closeAdd} />
        </Modal>
      )}
      {isOpenEditModal && (
        <Modal onClose={closeEdit}>
          <EditProductModal onClose={closeEdit} />
        </Modal>
      )}
    </div>
  );
};

export default AllProducts;
