import React from 'react'
import { Button } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import { connect } from 'react-redux'
import { addGun, minGun, addGunAsync } from './index.redux'

@connect(
  state => ({ num: state.counter }),
  { addGun, minGun, addGunAsync }
)
class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <h1>现在有枪: {this.props.num}把</h1>
        <Button type="primary" onClick={this.props.addGun}>申请武器</Button>
        <Button type="warning" onClick={this.props.minGun}>上交武器</Button>
        <Button type="primary" onClick={this.props.addGunAsync}>稍后申请</Button>
      </div>
    )
  }
}

export default App
