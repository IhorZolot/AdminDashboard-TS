import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Form, Formik } from 'formik';

import { SpriteSVG } from '../../../../../assets/icons/SpriteSVG';
import Button from '../../../../../shared/components/Button';
import styles from './EditSuppliersModal.module.scss';
import { selectStatus } from '../../../../../redux/Suppliers/suppliersSlice';
import {
  FormikInput,
  FormikSelect,
} from '../../../../../shared/components/InputFields/Input';
import validationsSuppliersEditSchema from '../helpers/validationsSuppliersEditSchema';
import {
  getStatusThunk,
  updateSuppliersThunk,
} from '../../../../../redux/Suppliers/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const EditSuppliersModal = ({ suppliers, onClose }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStatusThunk());
  }, [dispatch]);
  const status = useAppSelector(selectStatus);

  const initialValues = {
    ...suppliers,
    date: format(parseISO(suppliers.date), 'yyyy-MM-dd'),
  };
  console.log('suppliers', suppliers);
  const handleSubmit = (values, { resetForm }) => {
    const updatedSuppliers = { ...suppliers, ...values };
    dispatch(updateSuppliersThunk(updatedSuppliers)).then(() => {
      toast.success('Suppliers updated successfully');
      resetForm();
      onClose();
    });
  };

  return (
    <div className={styles.sectionModal}>
      <h2 className={styles.title}>Edit supplier</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationsSuppliersEditSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={styles.sectionInput}>
            <FormikInput name="name" placeholder="Suppliers Info" />
            <FormikInput name="address" placeholder="Address" />
            <FormikInput name="suppliers" placeholder="Company" />
            <FormikInput type="date" name="date" placeholder="Delivery date" />
            <FormikInput name="amount" placeholder="Amount" />
            <FormikSelect
              data={status || []}
              name="status"
              placeholder="Status"
            />
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

export default EditSuppliersModal;
