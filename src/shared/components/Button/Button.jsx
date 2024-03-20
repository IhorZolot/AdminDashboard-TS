import styles from './Button.module.scss';

const Button = ({ children, type, isCancel, onClick, ...rest }) => {
  const statusClassName = isCancel ? styles.cancel : styles.button;
  return (
    <button type={type} onClick={onClick} {...rest} className={statusClassName}>
      {children}
    </button>
  );
};

export default Button;
