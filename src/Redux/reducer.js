const initialState = {
  currentUser: {
    username: null
  }
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case "USER_SIGNUP":
      return({
        ...state,
        currentUser: {
          ...state.currentUser,
          username: action.payload.user.username
        }
      })
    case "LOGOUT":
      return({
        ...state,
        currentUser: {
          ...state.currentUser,
          username: null
        }
      })
    case "LOGIN":
      return({
        ...state,
        currentUser: {
          ...state.currentUser,
          username: action.payload.user.username
        }
      })
    default:
      return state
  }
}

export default reducer
