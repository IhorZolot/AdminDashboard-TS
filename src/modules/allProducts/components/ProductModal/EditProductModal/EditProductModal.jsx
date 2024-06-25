import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';

import validationsUpdateProductSchema from '../helpers/validationsProductEditSchema';
import { SpriteSVG } from '../../../../../assets/icons/SpriteSVG';
import Button from '../../../../../shared/components/Button';
import { selectCategories } from '../../../../../redux/Products/productSlice';
import styles from './EditProductModal.module.scss';
import {
  getCategoriesThunk,
  updateProductThunk,
} from '../../../../../redux/Products/operations';
import {
  FormikInput,
  FormikSelect,
} from '../../../../../shared/components/InputFields/Input';

const EditProductModal = ({ products, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  const categories = useSelector(selectCategories);
  console.log(products);
  const handleSubmit = (values, { resetForm }) => {
    const updatedProduct = { ...products, ...values};
    dispatch(updateProductThunk(updatedProduct)).then(() => {
      toast.success('Product updated successfully');
      resetForm();
      onClose();
    });
  };

  return (
    <div className={styles.sectionModal}>
      <h2 className={styles.title}>Edit product</h2>
      <Formik
        initialValues={products}
        onSubmit={handleSubmit}
        validationSchema={validationsUpdateProductSchema}
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
            <Button type="submit">Save</Button>
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

export default EditProductModal;
