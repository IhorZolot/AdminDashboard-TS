import { ErrorMessage, Field } from 'formik';

const FormikSelect = ({ data, name, placeholder }) => {
  return (
    <label>
      <Field as="select" name={name} placeholder={placeholder}>
        {data?.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={'div'} />
    </label>
  );
};

export default FormikSelect;
