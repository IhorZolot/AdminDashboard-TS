import styles from './Input.module.scss';

const Input = ({ type, ...rest }) => {
  return (
    <label>
      <input type={type} {...rest} className={styles.input} />
    </label>
  );
};

export default Input;
