import * as yup from 'yup';

const validationsAddProductSchema = yup.object().shape({
  name: yup.string().required('Product is required'),
  stock: yup.number().required('Stock is required'),
  price: yup.number().required('Price is required'),
  category: yup.string().required('Category is required'),
  suppliers: yup.string().required('Suppliers is required'),
});
export default validationsAddProductSchema;
