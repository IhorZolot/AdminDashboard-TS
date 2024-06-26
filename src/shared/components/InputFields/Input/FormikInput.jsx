import { ErrorMessage, Field } from 'formik';
import styles from './FormikInput.module.scss';

const FormikInput = ({ type, ...rest }) => {
  return (
    <label className={styles.label}>
      <Field className={styles.input} type={type} {...rest} />
      <ErrorMessage name={rest.name} component='span' className={styles.error}/>
    </label>
  );
};

export default FormikInput;
