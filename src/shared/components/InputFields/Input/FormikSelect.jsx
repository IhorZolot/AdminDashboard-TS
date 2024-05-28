import { Field } from 'formik';
import styles from './FormikSelect.module.scss';
import FormError from '../../../../modules/login/components/FormError';

const FormikSelect = ({ data, name, placeholder }) => {
  return (
    <>
      <Field
        as="select"
        name={name}
        placeholder={placeholder}
        className={styles.input}
      >
        {data?.map((item) => (
          <option key={item} value={item} className={styles.option}>
            {item}
          </option>
        ))}
      </Field>
      <FormError fieldName={name} />
    </>
  );
};

export default FormikSelect;
