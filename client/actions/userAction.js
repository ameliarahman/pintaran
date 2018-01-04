import axios from 'axios'

export const signOutUser = () => {
  type: 'signout'
}

export const signInUser = (email, password) => {
  return (dispatch) => {
    axios.post(`http://192.168.1.101:3000/users/signin`, {
      email: email,
      password: password
    })
      .then((dataUser) => {
        console.log(dataUser.data, "Ini sebelum dispatch...")
        dispatch(getDataUser(dataUser.data))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}

const getDataUser = (dataUser) => {
  let payload = dataUser
  return {
    type: 'signin',
    payload
  }
}