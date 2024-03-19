import styles from './Button.module.scss';

const Button = ({ children, type, onClick, ...rest }) => {
  return (
    <button type={type} onClick={onClick} {...rest} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
