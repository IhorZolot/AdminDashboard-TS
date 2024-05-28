import { useDispatch, useSelector } from 'react-redux';
import useModal from '../../hooks/useModal';
import Modal from '../../shared/components/Modal/Modal';
import styles from './AllSuppliers.module.scss';
import AddSuppliers from './components/AddSuppliers/AddSuppliers';
import AllSuppliersTab from './components/AllSuppliersTab/AllSuppliersTab';
import AddSuppliersModal from './components/SuppliersModal/AddSuppliersModal/AddSuppliersModal';
import EditSuppliersModal from './components/SuppliersModal/EditSuppliersModal/EditSuppliersModal';
import { useEffect, useState } from 'react';
import UserFilter from '../../shared/components/Filter/UserFilter';
import {
  fetchSuppliersThunk,
  filteredSuppliersByFieldThunk,
} from '../../redux/Suppliers/operations';
import {
  currentPageSuppliers,
  selectCurrentSuppliersPage,
  selectSuppliersPages,
} from '../../redux/Suppliers/suppliersSlice';
import { Pagination } from '../../shared/pagination/Pagination';

const AllSuppliers = () => {
  const dispatch = useDispatch();
  const [isOpenAddModal, openAdd, closeAdd] = useModal();
  const [isOpenEditModal, openEdit, closeEdit] = useModal();
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const totalPages = useSelector(selectSuppliersPages);
  const currentPage = useSelector(selectCurrentSuppliersPage);

  useEffect(() => {
    dispatch(fetchSuppliersThunk(currentPage));
  }, [dispatch, currentPage]);

  const applyFilter = (value) => {
    dispatch(filteredSuppliersByFieldThunk(value));
  };

  const handleOpenEditModal = (suppliers) => {
    setSelectedSupplier(suppliers);
    openEdit();
  };
  const handlePageChange = (pageNumber) => {
    dispatch(currentPageSuppliers(pageNumber));
  };
  return (
    <div className={styles.section}>
      <div className={styles.sector}>
        <UserFilter placeholder="User Name" onFilter={applyFilter} />
        <AddSuppliers
          onClick={() => {
            openAdd();
          }}
        />
      </div>
      <AllSuppliersTab onOpen={handleOpenEditModal} />
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      {isOpenAddModal && (
        <Modal onClose={closeAdd}>
          <AddSuppliersModal onClose={closeAdd} />
        </Modal>
      )}
      {isOpenEditModal && (
        <Modal onClose={closeEdit}>
          <EditSuppliersModal
            suppliers={selectedSupplier}
            onClose={closeEdit}
          />
        </Modal>
      )}
    </div>
  );
};

export default AllSuppliers;
