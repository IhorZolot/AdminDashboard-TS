import { Field } from 'formik';
import styles from './FormikInput.module.scss';
import FormError from '../../../../modules/login/components/FormError';

const FormikInput = ({ type, ...rest }) => {
  return (
    <>
      <Field className={styles.input} type={type} {...rest} />
      <FormError fieldName={rest.name} />
    </>
  );
};

export default FormikInput;
