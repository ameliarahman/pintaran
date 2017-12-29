import { combineReducers } from 'redux'
import userReducer from './userReducer'
import postReducer from './userReducer'

const rootReducer = combineReducers({
  userReducer,
  postReducer
})

export default rootReducer