import * as yup from 'yup';

const validationsEditProductSchema = yup.object().shape({
  name: yup.string(),
  stock: yup.number(),
  price: yup.number(),
  category: yup.string(),
  suppliers: yup.string(),
});
export default validationsEditProductSchema;
