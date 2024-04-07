import * as yup from 'yup';

const validationsSchema = yup.object().shape({
  name: yup
    .string()
    .min(6, 'Username must be at least 6 character')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be less than 13 characters')
    .required('Password is required'),
});

export default validationsSchema;
