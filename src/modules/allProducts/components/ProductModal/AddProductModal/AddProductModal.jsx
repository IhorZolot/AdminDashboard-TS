import { Form, Formik } from 'formik';
import { SpriteSVG } from '../../../../../assets/icons/SpriteSVG';
import Button from '../../../../../shared/components/Button/Button';
import styles from './AddProductModal.module.scss';
import FormikInput from '../../../../../shared/components/InputFields/Input/FormikInput';
import FormikSelect from '../../../../../shared/components/InputFields/Input/FormikSelect';
import { useEffect } from 'react';
import {
  addProductsThunk,
  getCategoriesThunk,
} from '../../../../../redux/Products/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../../../../redux/Products/productSlice';
import validationsAddProductSchema from '../helpers/validationsProductAddSchema';

const initialValues = {
  name: '',
  stock: '',
  price: '',
  category: '',
  suppliers: '',
};

const AddProductModal = ({ onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  const categories = useSelector(selectCategories);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(addProductsThunk(values));
    resetForm();
  };
  return (
    <div className={styles.sectionModal}>
      <h2 className={styles.title}>Add a new product</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationsAddProductSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={styles.sectionInput}>
            <FormikInput name="name" placeholder="Product Info" />
            <FormikSelect
              data={categories || []}
              name="category"
              placeholder="Category"
            />
            <FormikInput name="stock" placeholder="Stock" type="number" />
            <FormikInput name="suppliers" placeholder="Suppliers" />
            <FormikInput name="price" placeholder="Price" type="number" />
          </div>
          <div className={styles.sectionButton}>
            <Button type="submit">Add</Button>
            <Button type="button" onClick={onClose} isCancel>
              Cancel
            </Button>
          </div>
        </Form>
      </Formik>
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
