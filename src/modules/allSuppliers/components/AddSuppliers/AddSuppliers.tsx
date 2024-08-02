import styles from './AddSuppliers.module.scss';

interface IAddSuppliersProps {
  onClick: () => void;
}
const AddSuppliers = ({ onClick }: IAddSuppliersProps) => {
  return (
    <button className={styles.addSuppliers} onClick={onClick}>
      Add a new suppliers
    </button>
  );
};

export default AddSuppliers;
