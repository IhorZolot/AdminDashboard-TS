import * as yup from 'yup';

const validationsSuppliersEditSchema = yup.object().shape({
  name: yup.string(),
  suppliers: yup.string(),
  amount: yup.string(),
  address: yup.string(),
  date: yup.date(),
  status: yup.string(),
});
export default validationsSuppliersEditSchema;
