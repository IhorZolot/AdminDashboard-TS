import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { SpriteSVG } from '../../../../../assets/icons/SpriteSVG';
import Button from '../../../../../shared/components/Button';
import styles from './AddSuppliersModal.module.scss';
import {
  FormikInput,
  FormikSelect,
} from '../../../../../shared/components/InputFields/Input';
import validationsSuppliersAddSchema from '../helpers/validationsSuppliersAddSchema';
import {
  addSuppliersThunk,
  getStatusThunk,
} from '../../../../../redux/Suppliers/operations';
import { selectStatus } from '../../../../../redux/Suppliers/suppliersSlice';

const initialValues = {
  name: '',
  suppliers: '',
  amount: '',
  address: '',
  date: '',
  status: '',
};

const AddSuppliersModal = ({ onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatusThunk());
  }, [dispatch]);
  const status = useSelector(selectStatus);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addSuppliersThunk(values)).then(() => {
      toast.success('Suppliers added successfully');
      resetForm();
      onClose();
    });
  };

  return (
    <div className={styles.sectionModal}>
      <h2 className={styles.title}>Add a new suppliers</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationsSuppliersAddSchema}
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

export default AddSuppliersModal;
