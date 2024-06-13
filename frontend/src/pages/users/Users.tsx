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
import { TokenType, UserData } from '../../models';

export const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const [page, setPage] = useState(defaultPage);

  const app: TokenType = useSelector(selectApp);
  const users = useSelector(selectUsers);

  useEffect(() => {
    setIsLoading(true);
    app.token
      ? page &&
        dispatch(getUsersDataAsync(page)).then(() => {
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
            {users.data?.map((user: UserData) => (
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
