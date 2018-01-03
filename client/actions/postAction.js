import axios from 'axios'

const getAllPostData = (data) => {
  console.log(data)
  const payload = data
  return {
    type: 'get_post',
    payload
  }
}

export const fetchAllPostData = () => {
  console.log("=================================== haihaiahai")
  return (dispatch) => {
    axios.get(`http://192.168.1.14:3000/pintaran`)
      .then((dataPost) => {
        console.log(dataPost.data)
        dispatch(getAllPostData(dataPost.data))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}