import styles from './User.module.css';
import {
  Container,
  Header,
  Loader,
  Pagination,
  UserCard,
} from '../../components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersDataAsync } from '../../actions';
import { selectUsers } from '../../selectors/selectUsers';
import { defaultPage } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { selectApp } from '../../selectors';

export const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(defaultPage);

  const app = useSelector(selectApp);
  const users = useSelector(selectUsers);

  useEffect(() => {
    setIsLoading(true);
    app.token
      ? dispatch(getUsersDataAsync(page)).then(() => {
          setIsLoading(false);
        })
      : navigate('/login');
  }, [dispatch, page, app, navigate]);

  const onClickBack = () => {
    setPage(page - 1);
  };
  const onClickForward = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ul className={styles.containerCards}>
            {users.data?.map((user) => (
              <UserCard key={user.id} user={user} page={page} />
            ))}
          </ul>
          <Pagination
            page={page}
            onClickBack={onClickBack}
            onClickForward={onClickForward}
            totalPage={users.total_pages}
            defaultPage={defaultPage}
          />
        </>
      )}
    </Container>
  );
};
