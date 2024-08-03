import { ErrorMessage, Field, FieldAttributes } from 'formik';
import styles from './FormikInput.module.scss';
interface FormikInputProps extends FieldAttributes<any> {
  name: string;
}

const FormikInput: React.FC<FormikInputProps> = ({ ...rest }) => {
  return (
    <label className={styles.label}>
      <Field className={styles.input} {...rest} />
      <ErrorMessage
        name={rest.name}
        component="span"
        className={styles.error}
      />
    </label>
  );
};

export default FormikInput;
