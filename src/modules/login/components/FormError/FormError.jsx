const FormError = ({ touched, errors, fieldName }) => {
  const getValidationMessage = fieldName => {
    switch (fieldName) {
      case 'email':
        return 'Valid email format';
      case 'password':
        return 'Valid password';
      default:
        return 'Valid format';
    }
  };

  return (
    <>
      {errors && touched ? (
        <div>{errors[fieldName]}</div>
      ) : !errors && touched ? (
        <div>{getValidationMessage(fieldName)}</div>
      ) : null}
    </>
  );
};

export default FormError;
