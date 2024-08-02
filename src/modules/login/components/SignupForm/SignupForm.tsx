import { Formik, Form, Field, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import styles from './SignupForm.module.scss';
import validationsSchema from '../../helpers/validationsSchema';
import FormError from '../FormError';
import { signupThunk } from '@/redux/Auth/operations';
import { useAppDispatch } from '@/redux/hooks';
interface IValuesSingup {
  name: string;
  email: string;
  password: string;
}

const initialValues: IValuesSingup = {
  name: '',
  email: '',
  password: '',
};

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = (
    values: IValuesSingup,
    { resetForm }: FormikHelpers<IValuesSingup>
  ) => {
    dispatch(signupThunk(values))
      .unwrap()
      .then(() => {
        toast.success('Signup successful!');
        navigate('/login', {
          state: { email: values.email, password: values.password },
        });
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
      {({ touched, errors }) => (
        <Form className={styles.loginForm}>
          <label className={styles.loginLabel}>
            <Field
              className={styles.loginInput}
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <FormError
              fieldName="name"
              touched={touched.name || false}
              errors={errors}
            />
          </label>
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
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
