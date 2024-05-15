import { Formik, Form, Field } from 'formik';
import styles from './SignupForm.module.scss';
import validationsSchema from '../../helpers/validationsSchema';
import FormError from '../FormError';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignupForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
            type="name"
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
