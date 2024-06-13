import styles from './Title.module.css';

export const Title = ({ title }: { title: string }) => {
  return <h2 className={styles.title}>{title}</h2>;
};
