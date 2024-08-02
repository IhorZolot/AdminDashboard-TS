import { useEffect } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';

import validationsUpdateProductSchema from '../helpers/validationsProductEditSchema';
import { SpriteSVG } from '@assets/icons/SpriteSVG';
import Button from '@shared/components/Button';
import { selectCategories } from '@/redux/Products/productSlice';
import styles from './EditProductModal.module.scss';
import {
  getCategoriesThunk,
  updateProductThunk,
} from '@/redux/Products/operations';
import {
  FormikInput,
  FormikSelect,
} from '@shared/components/InputFields/Input';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types/product.types';

interface IEditProductModalProps {
  products: IProduct;
  onClose: () => void;
}

const EditProductModal = ({ products, onClose }: IEditProductModalProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  const categories = useAppSelector(selectCategories);
  console.log(products);
  const handleSubmit = (
    values: IProduct,
    { resetForm }: FormikHelpers<IProduct>
  ) => {
    const updatedProduct = { ...products, ...values };
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
        <SpriteSVG name="close" />
      </button>
    </div>
  );
};

export default EditProductModal;
