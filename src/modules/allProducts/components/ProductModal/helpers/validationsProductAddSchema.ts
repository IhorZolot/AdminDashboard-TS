import * as yup from 'yup';

const validationsAddProductSchema = yup.object().shape({
  name: yup.string().required('Product name is required'),
  stock: yup
    .number()
    .required('Stock is required')
    .min(0, 'Stock cannot be negative'),
  price: yup
    .number()
    .required('Price is required')
    .positive('Price must be positive'),
  category: yup.string().required('Category is required'),
  suppliers: yup.string().required('Suppliers is required'),
});
export default validationsAddProductSchema;
