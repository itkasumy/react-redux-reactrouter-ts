import React from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import { logout } from './Auth.redux'
import { Button } from 'antd-mobile';

function Erying() {
  return <h2>二营</h2>
}

function QiBingLian() {
  return <h3>骑兵连</h3>
}

@connect(
  state => state.auth,
  {logout}
)
class DashBoard extends React.Component {
  render() {
    const match = this.props.match
    const redirectToLogin = (<Redirect to="/login"></Redirect>)
    const app = (<div>
      <h1>独立团</h1>
      {this.props.isAuth ? <Button type="warning" onClick={this.props.logout }>注销</Button> : null}
      <ul>
        <li>
          <Link to={`${match.url}`}>主营</Link>
        </li>
        <li>
          <Link to={`${match.url}/erying`}>二营</Link>
        </li>
        <li>
          <Link to={`${match.url}/qibinglian`}>骑兵连</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.url}`} exact component={App}></Route>
        <Route path={`${match.url}/erying`} component={Erying}></Route>
        <Route path={`${match.url}/qibinglian`} component={QiBingLian}></Route>
      </Switch>
    </div>)
    return this.props.isAuth ? app : redirectToLogin
  }
}

export default DashBoard
