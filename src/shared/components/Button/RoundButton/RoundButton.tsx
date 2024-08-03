import { ButtonHTMLAttributes } from 'react';
import styles from './RoundButton.module.scss';

const RoundButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => <button className={styles.sectionBtn} {...props} />;

export default RoundButton;
