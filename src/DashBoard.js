import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import App from './App';

function Erying() {
  return <h2>二营</h2>
}

function QiBingLian() {
  return <h3>骑兵连</h3>
}

export default class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/dashboard">主营</Link>
          </li>
          <li>
            <Link to="/dashboard/erying">二营</Link>
          </li>
          <li>
            <Link to="/dashboard/qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Switch>
          {/* <Route path="/login" component={Auth} /> */}
          <Route path="/dashboard" exact component={App}></Route>
          <Route path="/dashboard/erying" component={Erying}></Route>
          <Route path="/dashboard/qibinglian" component={QiBingLian}></Route>
        </Switch>
      </div>
    )
  }
}
