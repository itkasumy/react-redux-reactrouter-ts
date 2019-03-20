import React from 'react';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

// class App extends React.Component {
//   render() {
//     let boss = '李云龙'
//     return (
//       <div>
//         <h1>独立团,团长: {boss} </h1>
//         <YiYing boss="张大喵"></YiYing>
//         <QiBingLian boss="孙德胜"></QiBingLian>
//       </div>
//     )
//   }
// }

// class YiYing extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       solders: ['虎子', '柱子', '王根生']
//     }
//     console.log('组件初始化中...')
//   }

//   addSolder() {
//     console.log('Hello fresh guy')
//     this.setState({
//       solders: [...this.state.solders, `FreshGuy ${Math.random()}`]
//     })
//   }

  
//   componentWillMount() {
//     console.log('组件即将挂载')
//   }
  
//   componentDidMount() {
//     console.log('组件挂载完成')
//   }
  

//   render() {
//     console.log('组件渲染中...')
//     return (
//       <div>
//         <h2>一营,营长: {this.props.boss}</h2>
//         <Button type="primary" onClick={() => this.addSolder()}>新兵入伍</Button>
//         <List renderHeader={() => '士兵列表'}>
//           {this.state.solders.map(val => <List.Item key={val}>{val}</List.Item>)}
//         </List>
//       </div>
//     )
//   }
// }

// function QiBingLian(props) {
//   return <h3>骑兵连,连长: {props.boss}。 冲啊!</h3>
// }

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    const store = this.props.store
    const addGun = this.props.addGun
    const minGun = this.props.minGun
    const addGunAsync = this.props.addGunAsync
    let num = store.getState()
    return (
      <div>
        <h1>现在有枪: {num}把</h1>
        <Button type="primary" onClick={() => store.dispatch(addGun())}>申请武器</Button>
        <Button type="warning" onClick={() => store.dispatch(minGun())}>上交武器</Button>
        <Button type="primary" onClick={() => store.dispatch(addGunAsync())}>稍后申请</Button>
      </div>
    )
  }
}

export default App
