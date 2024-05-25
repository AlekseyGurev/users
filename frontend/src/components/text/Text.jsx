import styles from './Text.module.css';

export const Text = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};
