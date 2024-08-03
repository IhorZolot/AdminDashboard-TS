import { ErrorMessage, Field } from 'formik';

import styles from './FormikSelect.module.scss';

interface IFormikSelectProps {
  name: string;
  data: string[];
  placeholder: string;
}
const FormikSelect = ({ data, name, placeholder }: IFormikSelectProps) => {
  return (
    <label className={styles.label}>
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
      <ErrorMessage name={name} component="span" className={styles.error} />
    </label>
  );
};

export default FormikSelect;
