import styles from './Container.module.css';
import { useLocation } from 'react-router-dom';

export const Container = ({ children }) => {
  const location = useLocation();
  const auth =
    location.pathname === '/login' || location.pathname === '/register';
  return (
    <div className={auth ? styles.containerAuth : styles.containerPage}>
      {children}
    </div>
  );
};
