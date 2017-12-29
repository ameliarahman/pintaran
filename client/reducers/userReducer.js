const initialState = {
  user: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export default userReducer