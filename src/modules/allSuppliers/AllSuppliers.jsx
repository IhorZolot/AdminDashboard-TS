import { SpriteSVG } from '../../assets/icons/SpriteSVG';
import useModal from '../../hooks/useModal';
import Button from '../../shared/components/Button/Button';
import Input from '../../shared/components/InputFields/Input/Input';
import Modal from '../../shared/components/Modal/Modal';
import styles from './AllSuppliers.module.scss';
import AddSuppliers from './components/AddSuppliers/AddSuppliers';
import AllSuppliersTab from './components/AllSuppliersTab/AllSuppliersTab';
import AddSuppliersModal from './components/SuppliersModal/AddSuppliersModal/AddSuppliersModal';
import EditSuppliersModal from './components/SuppliersModal/EditSuppliersModal/EditSuppliersModal';

const AllSuppliers = () => {
  const [isOpenAddModal, openAdd, closeAdd] = useModal();
  const [isOpenEditModal, openEdit, closeEdit] = useModal();
  return (
    <div className={styles.section}>
      <div className={styles.sector}>
        <div className={styles.sectorIntut}>
          <Input placeholder="User Name" />
          <Button>
            <SpriteSVG name="filter" /> Filter
          </Button>
        </div>
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
