import { useEffect } from 'react';
import './App.css';
import { Login, Register, User, Users } from './pages';
import { Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setAppData } from './actions';

function App() {
  const token = Cookies.get('token');
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(setAppData({ token }));
    }
  }, [dispatch, token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
