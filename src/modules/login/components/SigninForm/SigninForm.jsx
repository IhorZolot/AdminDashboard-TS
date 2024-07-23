import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

import styles from './SigninForm.module.scss';

import validationsSchema from '../../helpers/validationsSchema';
import FormError from '../FormError';
import { loginThunk } from '@/redux/Auth/operations';
import { useAppDispatch } from '@/redux/hooks';

const SigninForm = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const initialValues = {
    email: location.state?.email || '',
    password: location.state?.password || '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        toast.success('Login successful!');
        resetForm();
      });
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
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default SigninForm;
