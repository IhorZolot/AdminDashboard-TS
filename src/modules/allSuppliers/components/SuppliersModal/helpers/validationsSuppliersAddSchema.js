import * as yup from 'yup';

const validationsSuppliersAddSchema = yup.object().shape({
  name: yup.string().required('Suppliers name is required'),
  suppliers: yup.string().required('Company is required'),
  amount: yup.string().required('Amount is required'),
  address: yup.string().required('Address is required'),
  date: yup.date().required('Delivery date is required'),
  status: yup.string().required('Status is required'),
});
export default validationsSuppliersAddSchema;
