import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { usersReducer, userReducer, appReducer } from './reducers';

const reducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  app: appReducer,
});

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnchancers(applyMiddleware(thunk))
);
