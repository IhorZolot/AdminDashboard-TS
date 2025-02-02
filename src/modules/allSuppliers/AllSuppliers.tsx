import { useEffect, useState } from 'react';

import styles from './AllSuppliers.module.scss';

import AllSuppliersTab from './components/AllSuppliersTab';
import AddSuppliersModal from './components/SuppliersModal/AddSuppliersModal';
import EditSuppliersModal from './components/SuppliersModal/EditSuppliersModal';
import useModal from '@hooks/useModal';
import Modal from '@/shared/components/Modal';
import AddSuppliers from './components/AddSuppliers';
import UserFilter from '@shared/components/Filter/UserFilter';
import {
  fetchSuppliersThunk,
  filteredSuppliersByFieldThunk,
} from '@/redux/Suppliers/operations';
import {
  currentPageSuppliers,
  selectCurrentSuppliersPage,
  selectSuppliersPages,
} from '@/redux/Suppliers/suppliersSlice';
import Pagination from '@/shared/pagination';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ISupplier } from '@/types/supplier.types';

const AllSuppliers = () => {
  const dispatch = useAppDispatch();
  const [isOpenAddModal, openAdd, closeAdd] = useModal();
  const [isOpenEditModal, openEdit, closeEdit] = useModal();
  const [selectedSupplier, setSelectedSupplier] = useState<ISupplier>(
    {} as ISupplier
  );
  const totalPages = useAppSelector(selectSuppliersPages);
  const currentPage = useAppSelector(selectCurrentSuppliersPage);

  useEffect(() => {
    dispatch(fetchSuppliersThunk());
  }, [dispatch, currentPage]);

  const applyFilter = async (value: string) => {
    const results = await dispatch(
      filteredSuppliersByFieldThunk(value)
    ).unwrap();
    return results;
  };

  const handleOpenEditModal = (supplier: ISupplier) => {
    setSelectedSupplier(supplier);
    openEdit();
  };
  const handlePageChange = (pageNumber: number) => {
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
      <Pagination
        totalPages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
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
