import { useSelector } from 'react-redux';
import { selectUser } from '../../selectors';
import styles from './SocialList.module.css';
import { defaultPhone } from '../../constants/constants';

export const SocialList = () => {
  const user = useSelector(selectUser);
  return (
    <ul className={styles.container}>
      <li className={`${styles.item} ${styles.email}`}>
        <a className={styles.link} href={`mailto:${user.data?.email}`}>
          {user.data?.email}
        </a>
      </li>
      <li className={`${styles.item} ${styles.phone}`}>
        <a className={styles.link} href={`tel:${defaultPhone}`}>
          {defaultPhone}
        </a>
      </li>
    </ul>
  );
};
