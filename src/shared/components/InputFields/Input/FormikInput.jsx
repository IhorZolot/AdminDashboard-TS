import { ErrorMessage, Field } from 'formik';
import styles from './Input.module.scss';

const FormikInput = ({ type, ...rest }) => {
  return (
    <label>
      <Field className={styles.input} type={type} {...rest} />
      <ErrorMessage name={name} component={'div'} />
    </label>
  );
};

export default FormikInput;
