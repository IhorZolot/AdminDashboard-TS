import { Formik, Form, Field, FormikHelpers } from 'formik';
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

  interface IValuesSinhin {
    email: string;
    password: string;
  }

  const handleSubmit = (
    values: IValuesSinhin,
    { resetForm }: FormikHelpers<IValuesSinhin>
  ) => {
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
      {({ touched, errors }) => (
        <Form className={styles.loginForm}>
          <label className={styles.loginLabel}>
            <Field
              className={styles.loginInput}
              type="email"
              name="email"
              placeholder="Email address"
            />
            <FormError
              fieldName="email"
              touched={touched.email || false}
              errors={errors}
            />
          </label>
          <label className={styles.loginLabel}>
            <Field
              className={styles.loginInput}
              type="password"
              name="password"
              placeholder="Password"
            />
            <FormError
              fieldName="password"
              touched={touched.password || false}
              errors={errors}
            />
          </label>
          <button type="submit" className={styles.loginButton}>
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;
