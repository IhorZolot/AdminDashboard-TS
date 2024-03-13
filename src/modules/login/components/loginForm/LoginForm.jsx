import styles from './LoginForm.module.scss';

const LoginForm = () => {
  return (
    <form className={styles.loginForm}>
      <label className={styles.loginLable}>
        <input
          className={styles.loginInput}
          type="email"
          name="email"
          placeholder="Email address"
        />
      </label>
      <label className={styles.loginLable}>
        <input
          className={styles.loginInput}
          type="text"
          name="password"
          placeholder="Password"
        />
      </label>
      <button className={styles.loginButton}>Log in</button>
    </form>
  );
};

export default LoginForm;
