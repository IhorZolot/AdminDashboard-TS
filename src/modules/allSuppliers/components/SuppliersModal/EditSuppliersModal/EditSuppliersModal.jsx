import { SpriteSVG } from '../../../../../assets/icons/SpriteSVG';
import Button from '../../../../../shared/components/Button/Button';
import Input from '../../../../../shared/components/InputFields/Input/Input';
import styles from './EditSuppliersModal.module.scss';

const EditSuppliersModal = ({ onClose }) => {
  return (
    <div className={styles.sectionModal}>
      <h2 className={styles.tille}>Add a new product</h2>
      <div className={styles.sectionInput}>
        <Input placeholder="Suppliers Info" />
        <Input placeholder="Company" />
        <Input placeholder="Ammount" />
        <Input placeholder="Address" />
        <Input placeholder="Delivery date" />
        <Input placeholder="Status" />
      </div>
      <div className={styles.sectionButton}>
        <Button>Save</Button>
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

export default EditSuppliersModal;
