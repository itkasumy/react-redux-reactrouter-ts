const ADD_GUN = 'addGun'
const MIN_GUN = 'minGun'

// reducer
export const counter = (state, action) => {
  switch (action.type) {
    case ADD_GUN:
      return state + 1
    case MIN_GUN:
      return state - 1
    default:
      return 10
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