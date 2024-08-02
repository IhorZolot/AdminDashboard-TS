import * as yup from 'yup';

const validationsUpdateProductSchema = yup.object().shape({
  name: yup.string(),
  stock: yup.number().min(0, 'Stock cannot be negative'),
  price: yup.number().positive('Price must be positive'),
  category: yup.string(),
  suppliers: yup.string(),
});
export default validationsUpdateProductSchema;
