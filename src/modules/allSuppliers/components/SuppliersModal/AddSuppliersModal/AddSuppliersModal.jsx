import { Formik } from 'formik';
import { SpriteSVG } from '../../../../../assets/icons/SpriteSVG';
import Button from '../../../../../shared/components/Button/Button';
import Input from '../../../../../shared/components/InputFields/Input/Input';
import styles from './AddSuppliersModal.module.scss';

const AddSuppliersModal = ({ onClose }) => {
  return (
    <div className={styles.sectionModal}>
      <h2 className={styles.title}>Add a new product</h2>
      <Formik></Formik>
      <div className={styles.sectionInput}>
        <Input placeholder="Suppliers Info" />
        <Input placeholder="Company" />
        <Input placeholder="Amount" />
        <Input placeholder="Address" />
        <Input placeholder="Delivery date" />
        <Input placeholder="Status" />
      </div>
      <div className={styles.sectionButton}>
        <Button>Add</Button>
        <Button isCancel>Cancel</Button>
      </div>
      <button
        className={styles.spriteClose}
        onClick={() => {
          onClose();
        }}
      >
        <SpriteSVG name="close" width="16" height="16" />
      </button>
    </div>
  );
};

export default AddSuppliersModal;
