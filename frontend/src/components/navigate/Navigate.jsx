import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Navigate.module.css';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions';

export const Navigate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickExit = () => {
    Cookies.remove('token');
    dispatch(logout());
  };
  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <nav className={styles.navContainer}>
      <button
        className={`${styles.button} ${
          location.pathname === '/' ? styles.visuallyHidden : ''
        }`}
        onClick={onClickBack}
      >
        Назад
      </button>
      <button
        className={`${styles.buttonIcon} ${styles.buttonIconBack} ${
          location.pathname === '/' ? styles.visuallyHidden : ''
        }`}
        onClick={onClickBack}
      ></button>
      <button className={styles.button} onClick={onClickExit}>
        Выход
      </button>
      <button
        className={`${styles.buttonIcon} ${styles.buttonIconExit}`}
        onClick={onClickExit}
      ></button>
    </nav>
  );
};
