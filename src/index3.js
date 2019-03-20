import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
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

// class Ts extends React.Component { 
//   render() {
//     console.log(this.props)
//     return <div>测试组件{this.props.match.params.location}</div>
//   }
// }

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
            <Link to="/qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={App}></Route>
          <Route path="/erying" component={Erying}></Route>
          <Route path="/qibinglian" component={QiBingLian}></Route>
          {/* <Route path="/:location" component={Ts}></Route> */}
          <Redirect to="/erying"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root'))
