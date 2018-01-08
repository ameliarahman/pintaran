const initialState = {
  isLoggedIn: false,
  email: '',
  token: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'signin':
      return { ...state, email: action.payload.email, token: action.payload.token, isLoggedIn: true }
    case 'signout':
      return {...state, email: '', password: '', isLoggedIn: false}
    default:
      return state
  }
}

export default userReducer