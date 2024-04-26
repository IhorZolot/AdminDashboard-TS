import { useDispatch } from 'react-redux';
import useModal from '../../hooks/useModal';
import Modal from '../../shared/components/Modal/Modal';
import styles from './AllSuppliers.module.scss';
import AddSuppliers from './components/AddSuppliers/AddSuppliers';
import AllSuppliersTab from './components/AllSuppliersTab/AllSuppliersTab';
import AddSuppliersModal from './components/SuppliersModal/AddSuppliersModal/AddSuppliersModal';
import EditSuppliersModal from './components/SuppliersModal/EditSuppliersModal/EditSuppliersModal';
import { useEffect } from 'react';
import { fetchSuppliers } from '../../redux/Suppliers/operations';
import UserFilter from '../../shared/components/Filter/UserFilter';
import { filterSuppliers } from '../../redux/Suppliers/suppliersSlice';

const AllSuppliers = () => {
  const [isOpenAddModal, openAdd, closeAdd] = useModal();
  const [isOpenEditModal, openEdit, closeEdit] = useModal();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);
  const applyFilter = (value) => {
    dispatch(filterSuppliers(value));
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
      <AllSuppliersTab onOpen={openEdit} />
      {isOpenAddModal && (
        <Modal onClose={closeAdd}>
          <AddSuppliersModal onClose={closeAdd} />
        </Modal>
      )}
      {isOpenEditModal && (
        <Modal onClose={closeEdit}>
          <EditSuppliersModal onClose={closeEdit} />
        </Modal>
      )}
    </div>
  );
};

export default AllSuppliers;
