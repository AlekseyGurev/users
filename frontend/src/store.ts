import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { usersReducer, userReducer, appReducer } from './reducers';

const reducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  app: appReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// @ts-ignore: error message
export const store = createStore(
  reducer,
  composeEnchancers(applyMiddleware(thunk))
);
