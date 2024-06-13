import {
  Button,
  Container,
  Error,
  FieldsetContainer,
  Input,
  LinkContainer,
  Title,
} from '../../components';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { sendAuthDataAsync } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from 'js-cookie';
import { selectApp } from '../../selectors';
import { AuthType, ResponseType } from '../../models';

const regFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('Заполните email')
    .email('Неверный формат email'),
  password: yup.string().required('Введите пароль'),
});

export const Login = () => {
  const navigate = useNavigate();
  const [isSend, setIsSend] = useState(false);
  const dispatch: any = useDispatch();

  const app = useSelector(selectApp);

  useEffect(() => {
    app.token && navigate('/');
  }, [app, navigate]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(regFormSchema),
  });

  const [errorServer, setErrorServer] = useState('');
  const formError = errors?.email?.message || errors?.password?.message;
  const errorMessage = formError || errorServer;

  const sendAuth = async (authData: AuthType) => {
    setIsSend(!isSend);
    setErrorServer('');
    await dispatch(sendAuthDataAsync(authData, 'login')).then(
      (response: ResponseType) => {
        if (response.error) {
          setErrorServer('Неверный логин или пароль');
        } else {
          response.token && Cookies.set('token', response.token);
          navigate('/');
        }
      }
    );
    setIsSend(!isSend);
    reset();
  };

  return (
    <Container>
      <Title title={'Вход'} />
      <form onSubmit={handleSubmit((authData) => sendAuth(authData))}>
        <FieldsetContainer>
          <Input
            name={'email'}
            title={'Электронная почта'}
            placeholder={'example@mail.ru...'}
            register={register}
            formError={formError}
          />
          <Input
            name={'password'}
            title={'Пароль'}
            placeholder={'Пароль...'}
            type={'password'}
            register={register}
            formError={formError}
          />
          {errorMessage && <Error title={errorMessage} />}
        </FieldsetContainer>
        <Button type={'submit'} disabled={isSend} title={'Войти'} />
        <LinkContainer link={'/register'} title={'Зарегистрироваться'} />
      </form>
    </Container>
  );
};
