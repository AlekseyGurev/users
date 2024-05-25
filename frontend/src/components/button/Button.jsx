import styles from './Button.module.css';

export const Button = ({ title, disabled, type }) => {
  return (
    <button type={type} className={styles.button} disabled={disabled}>
      {title}
    </button>
  );
};
