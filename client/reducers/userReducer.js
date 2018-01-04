const initialState = {
  isLoggedIn: false,
  email: '',
  password: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'signin':
      return { ...state, email: action.payload.email, password: action.payload.password, isLoggedIn: true }
    case 'signout':
      return {...state, email: '', password: '', isLoggedIn: false}
    default:
      return state
  }
}

export default userReducer