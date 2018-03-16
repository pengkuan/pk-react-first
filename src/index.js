import React  from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Routers} from './routes/index'
import userReducer from './reducers/user'

const store = createStore(userReducer)

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);

