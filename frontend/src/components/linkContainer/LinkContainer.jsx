import styles from './LinkContainer.module.css';
import { Link } from 'react-router-dom';
export const LinkContainer = ({ link, title }) => {
  return (
    <div className={styles.link}>
      <Link to={link}>{title}</Link>
    </div>
  );
};
