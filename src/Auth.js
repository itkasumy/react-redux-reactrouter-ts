import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import { login, getUserData } from './Auth.redux'
import { Button } from 'antd-mobile';
// import axios from 'axios';

@connect(
  state => state.auth,
  { login, getUserData }
)
class Auth extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: []
  //   }
  // }
  
  // componentWillMount = () => {
  //   axios.get('/data')
  //     .then(res => {
  //       if (res.status === 200) {
  //         console.log(res.data);
  //         this.setState({data: res.data})
  //       }
  //     })
  // }

  
  componentWillMount() {
    this.props.getUserData()
  }
  

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>请使用以下姓名登录:姓名:{this.props.user}, 年龄: {this.props.age}</h2>
        <ul>
          {/* {this.state.data.map((val, key) => {
            return <li key={key}>{val.name || val.user} - {val.age}</li>
          })} */}
        </ul>
        {this.props.isAuth ? <Redirect to="/dashboard" /> : null}
        <h2>你没有权限，请登录...</h2>
        <Button type="primary" onClick={this.props.login}>登录</Button>
      </div>
    )
  }
}

export default Auth
