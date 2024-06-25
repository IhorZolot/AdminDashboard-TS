import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import styles from './SignupForm.module.scss';
import validationsSchema from '../../helpers/validationsSchema';
import FormError from '../FormError';
import { signupThunk } from '@redux/Auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(signupThunk(values))
      .unwrap()
      .then(() => {
        toast.success('Signup successful!');
        navigate('/login', { state: { email: values.email, password: values.password } });
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again.');
      });
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationsSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.loginForm}>
        <label className={styles.loginLabel}>
          <Field
            className={styles.loginInput}
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <FormError fieldName="name" />
        </label>
        <label className={styles.loginLabel}>
          <Field
            className={styles.loginInput}
            type="email"
            name="email"
            placeholder="Email address"
          />
          <FormError fieldName="email" />
        </label>
        <label className={styles.loginLabel}>
          <Field
            className={styles.loginInput}
            type="password"
            name="password"
            placeholder="Password"
          />
          <FormError fieldName="password" />
        </label>
        <button type="submit" className={styles.loginButton}>
          Sign up
        </button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
