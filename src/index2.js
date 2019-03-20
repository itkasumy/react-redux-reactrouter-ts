import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link} from 'react-router-dom'
import App from './App';
import { counter } from './index.redux';

const chromeReduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : () => { }
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  chromeReduxDevtools()
))

function Erying() {
  return <h2>二营</h2>
}

function QiBingLian(params) {
  return <h3>骑兵连</h3>
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">主营</Link>
          </li>
          <li>
            <Link to="/erying">二营</Link>
          </li>
          <li>
            <Link to="qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Route path="/" exact component={App}></Route>
        <Route path="/erying" component={Erying}></Route>
        <Route path="/qibinglian" component={QiBingLian}></Route>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root'))
