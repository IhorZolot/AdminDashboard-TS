import { useEffect } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';

import { SpriteSVG } from '@assets/icons/SpriteSVG';
import Button from '@shared/components/Button';
import styles from './AddSuppliersModal.module.scss';
import {
  FormikInput,
  FormikSelect,
} from '@/shared/components/InputFields/Input';
import validationsSuppliersAddSchema from '../helpers/validationsSuppliersAddSchema';
import {
  addSuppliersThunk,
  getStatusThunk,
} from '@/redux/Suppliers/operations';
import { selectStatus } from '@/redux/Suppliers/suppliersSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ISupplier } from '@/types/supplier.types';

interface IAddSuppliersModalProps {
  onClose: () => void;
}

const initialValues: ISupplier = {
  name: '',
  suppliers: '',
  amount: '',
  address: '',
  date: '',
  status: '',
};

const AddSuppliersModal = ({ onClose }: IAddSuppliersModalProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStatusThunk());
  }, [dispatch]);
  const status = useAppSelector(selectStatus);

  const handleSubmit = (
    values: ISupplier,
    { resetForm }: FormikHelpers<ISupplier>
  ) => {
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
        <SpriteSVG name="close" />
      </button>
    </div>
  );
};

export default AddSuppliersModal;
