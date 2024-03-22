import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './LoginForm.module.scss';
import * as yup from 'yup';

const userSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.loginForm}>
        <label className={styles.loginLable}>
          <Field
            className={styles.loginInput}
            type="email"
            name="email"
            placeholder="Email address"
          />
          <ErrorMessage name="email" />
        </label>
        <label className={styles.loginLable}>
          <Field
            className={styles.loginInput}
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" />
        </label>
        <button type="submit" className={styles.loginButton}>
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
