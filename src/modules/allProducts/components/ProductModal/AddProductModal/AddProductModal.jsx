import { SpriteSVG } from '../../../../../assets/icons/SpriteSVG';
import Button from '../../../../../shared/components/Button/Button';
import Input from '../../../../../shared/components/InputFields/Input/Input';
import styles from './AddProductModal.module.scss';

const AddProductModal = ({ onClose }) => {
  return (
    <div className={styles.sectionModal}>
      <h2 className={styles.tille}>Add a new product</h2>
      <div className={styles.sectionInput}>
        <Input placeholder="Product Info" />
        <Input placeholder="Stock" />
        <Input placeholder="Price" />
        <Input placeholder="Category" />
        <Input placeholder="Suppliers" />
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

export default AddProductModal;
