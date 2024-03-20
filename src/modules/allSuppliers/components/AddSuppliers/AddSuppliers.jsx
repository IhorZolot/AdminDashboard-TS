import styles from './AddSuppliers.module.scss';
const AddSuppliers = ({ onClick }) => {
  return (
    <button className={styles.addSuppliers} onClick={onClick}>
      Add a new suppliers
    </button>
  );
};

export default AddSuppliers;
