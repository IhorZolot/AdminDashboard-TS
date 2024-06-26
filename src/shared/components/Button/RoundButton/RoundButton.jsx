import styles from './RoundButton.module.scss';

const RoundButton = ({ ...props}) => (
  <button
    className={styles.sectionBtn}
    {...props}
  />
)

export default RoundButton;
