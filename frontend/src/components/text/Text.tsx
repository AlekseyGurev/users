import styles from './Text.module.css';

export const Text = ({ text }: { text: string }) => {
  return <p className={styles.text}>{text}</p>;
};
