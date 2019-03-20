import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { counter, addGun, minGun, addGunAsync } from './index1.redux';

const chromeReduxDevtools = window.devToolsExtension ? window.devToolsExtension : () => {}
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  chromeReduxDevtools()
))

function render() {
  ReactDOM.render(<App store={store} addGun={addGun} minGun={minGun} addGunAsync={addGunAsync} />, document.getElementById('root'))
}

render()

store.subscribe(render)

// import { createStore } from 'redux';

// function counter(state, action) {
//   switch (action.type) {
//     case 'addGun':
//       return state + 1
//     case 'minGun':
//       return state - 1
//     default:
//       return 10
//   }
// }

// const store = createStore(counter)

// function listener() {
//   const current = store.getState()
//   console.log(`现在有枪： ${current}把`)
// }
// store.subscribe(listener)

// const init = store.getState()
// console.log(init)

// store.dispatch({type: 'addGun'})
// // console.log(store.getState())

// store.dispatch({type: 'minGun'})
// // console.log(store.getState())
