import styles from './Error.module.css';

export const Error = ({ title }) => {
  return <span className={styles.error}>{title}</span>;
};
