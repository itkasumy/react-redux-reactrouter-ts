import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {login} from './Auth.redux'
import { Button } from 'antd-mobile';

@connect(
  state => state.auth,
  {login}
)
class Auth extends React.Component {
  render() {
    return (
      <div>
        {this.props.isAuth ? <Redirect to="/dashboard" /> : null}
        <h2>你没有权限，请登录...</h2>
        <Button type="primary" onClick={this.props.login}>登录</Button>
      </div>
    )
  }
}

export default Auth
