import styles from './Button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isCancel?: boolean;
}
const Button: React.FC<IButtonProps> = ({ isCancel, ...rest }) => {
  return (
    <button className={isCancel ? styles.cancel : styles.button} {...rest} />
  );
};

export default Button;
