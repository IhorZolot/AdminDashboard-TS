import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';

import FormikSelect from '../../../../../shared/components/InputFields/Input/FormikSelect';
import FormikInput from '../../../../../shared/components/InputFields/Input/FormikInput';
import validationsUpdateProductSchema from '../helpers/validationsProductEditSchema';

import { SpriteSVG } from '../../../../../assets/icons/SpriteSVG';
import Button from '../../../../../shared/components/Button/Button';
import styles from './EditProductModal.module.scss';
import {
  getCategoriesThunk,
  updateProductThunk,
} from '../../../../../redux/Products/operations';
import { selectCategories } from '../../../../../redux/Products/productSlice';

const EditProductModal = ({ products, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  const categories = useSelector(selectCategories);

  const handleSubmit = (values, { resetForm }) => {
    const updatedProduct = { ...products, ...values, _id: products._id };
    console.log('Updated product: ', updatedProduct);
    dispatch(updateProductThunk(updatedProduct));
    resetForm();
    onClose();
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
