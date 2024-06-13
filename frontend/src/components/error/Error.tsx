import { ErrorProps } from '../../models';
import styles from './Error.module.css';

export const Error = ({ title }: ErrorProps) => {
  return <span className={styles.error}>{title}</span>;
};
