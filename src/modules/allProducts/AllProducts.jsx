import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { SpriteSVG } from '../../assets/icons/SpriteSVG';
import useModal from '../../hooks/useModal';
import RoundButton from '../../shared/components/Button/RoundButton';
import UserFilter from '../../shared/components/Filter/UserFilter';
import Modal from '../../shared/components/Modal';
import styles from './AllProducts.module.scss';
import AllProductsTab from './components/AllProductsTab';
import AddProductModal from './components/ProductModal/AddProductModal';
import EditProductModal from './components/ProductModal/EditProductModal';
import {
  fetchProductsThunk,
  filteredProductsByFieldThunk,
} from '../../redux/Products/operations';
import {
  currentPageProducts,
  selectCurrentPage,
  selectPages,
} from '../../redux/Products/productSlice';
import { Pagination } from '../../shared/pagination/Pagination';
import ScrollTable from '../../shared/scrollTable/ScrollTable';

const AllProducts = () => {
  const dispatch = useDispatch();
  const [isOpenAddModal, openAdd, closeAdd] = useModal();
  const [isOpenEditModal, openEdit, closeEdit] = useModal();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const totalPages = useSelector(selectPages);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchProductsThunk(currentPage));
  }, [dispatch, currentPage]);
  const applyFilter = (value) => {
    dispatch(filteredProductsByFieldThunk(value));
  };
  const handleOpenEditModal = (product) => {
    setSelectedProduct(product);
    openEdit();
  };
  const handlePageChange = (pageNumber) => {
    dispatch(currentPageProducts(pageNumber));
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
      <ScrollTable>
        <AllProductsTab onOpenEdit={handleOpenEditModal} />
      </ScrollTable>
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      {isOpenAddModal && (
        <Modal onClose={closeAdd}>
          <AddProductModal onClose={closeAdd} />
        </Modal>
      )}
      {isOpenEditModal && selectedProduct && (
        <Modal onClose={closeEdit}>
          <EditProductModal products={selectedProduct} onClose={closeEdit} />
        </Modal>
      )}
    </div>
  );
};

export default AllProducts;
