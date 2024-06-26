import styles from './Button.module.scss';

const Button = ({isCancel,  ...rest }) => {
  return (
    <button className={isCancel ? styles.cancel : styles.button} {...rest} />
  );
};

export default Button;
