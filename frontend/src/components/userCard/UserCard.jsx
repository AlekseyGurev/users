import { useDispatch, useSelector } from 'react-redux';
import styles from './UserCard.module.css';
import { updateUsersData } from '../../actions';
import { useEffect, useState } from 'react';
import { selectUsers } from '../../selectors/selectUsers';
import { Link, useNavigate } from 'react-router-dom';

export const UserCard = ({ user, page }) => {
  const [islike, setIsLike] = useState(user.like || false);
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem(`${page}`, JSON.stringify(users.data));
  }, [islike]);

  const onClickLike = () => {
    setIsLike(!islike);
    dispatch(updateUsersData({ ...user, like: !islike }));
  };

  return (
    <li className={styles.container}>
      <Link className={styles.link} to={`/users/${user.id}`}>
        <img
          className={styles.image}
          src={`${user.avatar}`}
          width={124}
          height={124}
          alt="foto"
        />
        <h2
          className={styles.title}
        >{`${user.first_name} ${user.last_name} `}</h2>
      </Link>
      <span
        className={`${styles.like} ${islike ? styles.likeOn : styles.likeOff}`}
        onClick={onClickLike}
      ></span>
    </li>
  );
};
