import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import styles from './AllProducts.module.scss';
import { SpriteSVG } from '@/assets/icons/SpriteSVG';

import useModal from '@hooks/useModal';
import RoundButton from '@shared/components/Button/RoundButton';
import UserFilter from '@shared/components/Filter/UserFilter';
import Modal from '@shared/components/Modal';
import AllProductsTab from './components/AllProductsTab';
import AddProductModal from './components/ProductModal/AddProductModal';
import EditProductModal from './components/ProductModal/EditProductModal';
import {
  fetchProductsThunk,
  filteredProductsByFieldThunk,
} from '@/redux/Products/operations';
import {
  currentPageProducts,
  selectCurrentPage,
  selectPages,
} from '@/redux/Products/productSlice';
import Pagination from '@/shared/pagination';
import { IProduct } from '@/types/products.types';

const AllProducts = () => {
  const dispatch = useAppDispatch();
  const [isOpenAddModal, openAdd, closeAdd] = useModal();
  const [isOpenEditModal, openEdit, closeEdit] = useModal();
  const [selectedProduct, setSelectedProduct] = useState<null | IProduct>(null);
  const totalPages = useAppSelector(selectPages);
  const currentPage = useAppSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);
  const applyFilter = async (value: string) => {
    const results = await dispatch(
      filteredProductsByFieldThunk(value)
    ).unwrap();
    return results;
  };
  const handleOpenEditModal = (product: IProduct) => {
    setSelectedProduct(product);
    openEdit();
  };
  const handlePageChange = (pageNumber: number) => {
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
            <SpriteSVG name="add" />
          </RoundButton>
          <p className={styles.text}>Add a new product</p>
        </div>
      </div>
      <AllProductsTab onOpenEdit={handleOpenEditModal} />
      <Pagination
        totalPages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
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
