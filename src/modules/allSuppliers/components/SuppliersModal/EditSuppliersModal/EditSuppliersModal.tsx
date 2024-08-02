import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';

import { SpriteSVG } from '@assets/icons/SpriteSVG';
import Button from '@shared/components/Button';
import styles from './EditSuppliersModal.module.scss';
import { selectStatus } from '@/redux/Suppliers/suppliersSlice';
import {
  FormikInput,
  FormikSelect,
} from '@shared/components/InputFields/Input';
import validationsSuppliersEditSchema from '../helpers/validationsSuppliersEditSchema';
import {
  getStatusThunk,
  updateSuppliersThunk,
} from '@/redux/Suppliers/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ISupplier } from '@/types/supplier.types';

interface IEditSuppliersModal {
  suppliers: ISupplier;
  onClose: () => void;
}

const EditSuppliersModal = ({ suppliers, onClose }: IEditSuppliersModal) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStatusThunk());
  }, [dispatch]);
  const status = useAppSelector(selectStatus);

  const initialValues = suppliers
    ? {
        ...suppliers,
        date: format(parseISO(suppliers.date), 'yyyy-MM-dd'),
      }
    : {
        name: '',
        address: '',
        suppliers: '',
        date: '',
        amount: '',
        status: '',
      };
  const handleSubmit = (
    values: ISupplier,
    { resetForm }: FormikHelpers<ISupplier>
  ) => {
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
        <SpriteSVG name="close" />
      </button>
    </div>
  );
};

export default EditSuppliersModal;
