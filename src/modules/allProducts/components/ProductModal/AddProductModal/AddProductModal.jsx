import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import styles from './AddProductModal.module.scss';
import { SpriteSVG } from '@assets/icons/SpriteSVG';

import Button from '@shared/components/Button';
import {
  FormikInput,
  FormikSelect,
} from '@shared/components/InputFields/Input';
import {
  addProductsThunk,
  getCategoriesThunk,
} from '@redux/Products/operations';
import { selectCategories } from '@redux/Products/productSlice';
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
    dispatch(addProductsThunk(values)).then(() => {
      toast.success('Product added successfully');
      resetForm();
      onClose();
    });
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
        <SpriteSVG name="close"/>
      </button>
    </div>
  );
};

export default AddProductModal;
