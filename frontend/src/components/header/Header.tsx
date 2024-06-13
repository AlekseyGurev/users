import { useLocation } from 'react-router-dom';
import { Navigate } from '../navigate/Navigate';
import styles from './Header.module.css';
import {
  defaultText,
  defaultTextUser,
  defaultTitle,
} from '../../constants/constants';
import { useSelector } from 'react-redux';
import { selectUser } from '../../selectors';

export const Header = () => {
  const location = useLocation();
  const user = useSelector(selectUser);

  return (
    <div className={styles.containerHeader}>
      <div className={styles.container}>
        <Navigate />
        {location.pathname === `/users/${user.data?.id}` ? (
          <>
            <div className={styles.containerUser}>
              <img
                className={styles.imageUser}
                width={187}
                height={187}
                src={user.data?.avatar}
                alt="foto"
              />
              <div className={styles.descriptionContainerUser}>
                <h2
                  className={styles.title}
                >{`${user.data.first_name} ${user.data.last_name}`}</h2>
                <p className={styles.descriptionUser}>{defaultTextUser}</p>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.descriptionContainer}>
            <h1 className={styles.title}>{defaultTitle}</h1>
            <p className={styles.description}>{defaultText}</p>
          </div>
        )}
      </div>
    </div>
  );
};
