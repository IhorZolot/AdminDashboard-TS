import { Form, Formik } from 'formik';
import { SpriteSVG } from '../../../../../assets/icons/SpriteSVG';
import Button from '../../../../../shared/components/Button/Button';
import styles from './AddProductModal.module.scss';
import FormikInput from '../../../../../shared/components/InputFields/Input/FormikInput';
import FormikSelect from '../../../../../shared/components/InputFields/Input/FormikSelect';
import { useEffect } from 'react';
import { getCategoriesThunk } from '../../../../../redux/Products/operations';
import { useDispatch, useSelector } from 'react-redux';
import { seelctCategories } from '../../../../../redux/Products/productSlice';

const AddProductModal = ({ onClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  const categories = useSelector(seelctCategories);
  const initialValues = {
    product: '',
    stock: '',
    price: '',
    category: '',
    suppliers: '',
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={styles.sectionModal}>
      <h2 className={styles.tille}>Add a new product</h2>
      <div className={styles.sectionInput}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <FormikInput name="product" placeholder="Product Info" />
            <FormikInput name="stock" placeholder="Stock" />
            <FormikInput name="price" placeholder="Price" />
            <FormikSelect
              data={categories}
              name="category"
              placeholder="Category"
            />
            <FormikInput name="suppliers" placeholder="Suppliers" />
            <div className={styles.sectionButton}>
              <Button type="submit">Add</Button>
              <Button type="button" isCancel>
                Cancel
              </Button>
            </div>
          </Form>
        </Formik>
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
