import {
  Input,
  Title,
  Button,
  Container,
  LinkContainer,
  FieldsetContainer,
  Error,
} from '../../components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { sendAuthDataAsync } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { selectApp } from '../../selectors';

const regFormSchema = yup.object().shape({
  name: yup.string().required('Заполните имя'),
  email: yup
    .string()
    .required('Заполните email')
    .email('Неверный формат email'),
  password: yup
    .string()
    .required('Введите пароль')
    .matches(
      /^[\w#%]+$/,
      'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %'
    )
    .min(4, 'Минимум 4 символов')
    .max(20, 'Максимум 15 символов'),
  passcheck: yup
    .string()
    .required('Введите повтор пароль')
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const app = useSelector(selectApp);

  useEffect(() => {
    app.token && navigate('/');
  }, [app, navigate]);

  const [isSend, setIsSend] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      passcheck: '',
    },
    resolver: yupResolver(regFormSchema),
  });

  const [errorServer, setErrorServer] = useState(null);
  const formError =
    errors?.email?.message ||
    errors?.password?.message ||
    errors?.passcheck?.message;
  const errorMessage = formError || errorServer;

  const sendAuth = async ({ email, password }) => {
    setIsSend(!isSend);
    setErrorServer(null);
    await dispatch(sendAuthDataAsync({ email, password }, 'register')).then(
      (response) => {
        if (response.error) {
          setErrorServer('Ошибка сервера');
        } else {
          Cookies.set('token', response.token);
          navigate('/');
        }
      }
    );
    setIsSend(!isSend);
    reset();
  };

  return (
    <Container>
      <Title title={'Регистрация'} />
      <form onSubmit={handleSubmit((authData) => sendAuth(authData))}>
        <FieldsetContainer>
          <Input
            name={'name'}
            title={'Имя'}
            placeholder={'Артур'}
            register={register}
            formError={formError}
          />
          <Input
            name={'email'}
            title={'Электронная почта'}
            placeholder={'example@mail.ru'}
            register={register}
            formError={formError}
          />
          <Input
            name={'password'}
            title={'Пароль'}
            placeholder={'Пароль'}
            type={'password'}
            register={register}
            formError={formError}
          />
          <Input
            name={'passcheck'}
            title={'Подтвердите пароль'}
            placeholder={'Подтвердите пароль'}
            type={'password'}
            register={register}
            formError={formError}
          />
          <Error title={errorMessage} />
        </FieldsetContainer>
        <Button
          type={'submit'}
          disabled={isSend}
          title={'Зарегистрироваться'}
        />
        <LinkContainer link={'/login'} title={'Войти'} />
      </form>
    </Container>
  );
};
