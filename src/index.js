import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './Auth';
import DashBoard from './DashBoard';
import { counter } from './index.redux';

const chromeReduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : () => { }
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  chromeReduxDevtools()
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/dashboard" exact component={DashBoard} />
        {/* <Redirect to="/dashboard"></Redirect> */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
