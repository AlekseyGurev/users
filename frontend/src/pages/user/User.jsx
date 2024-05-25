import { useEffect, useState } from 'react';
import { Container, Header, Loader, SocialList, Text } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataAsync } from '../../actions';
import { textOne, textThree, textTwo } from '../../constants/constants';
import styles from './User.module.css';
import { selectApp } from '../../selectors';

export const User = () => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const app = useSelector(selectApp);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    app.token
      ? dispatch(getUserDataAsync(params.id)).then(() => {
          setIsLoading(false);
        })
      : navigate('/login');
  }, [dispatch, params, navigate, app]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <Header />
      <div className={styles.container}>
        <SocialList />
        <div className={styles.textContainer}>
          <Text text={textOne} />
          <Text text={textTwo} />
          <Text text={textThree} />
        </div>
      </div>
    </Container>
  );
};
