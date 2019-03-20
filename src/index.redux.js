const ADD_GUN = 'addGun'
const MIN_GUN = 'minGun'

// reducer
export const counter = (state=10, action) => {
  console.log(state)
  switch (action.type) {
    case ADD_GUN:
      return state + 1
    case MIN_GUN:
      return state - 1
    default:
      return state
  }
}

// action creater
export const addGun = () => ({ type: ADD_GUN })
export const minGun = () => ({ type: MIN_GUN })

export const addGunAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGun())
    }, 2000)
  }
}