import axios from 'axios'

const getAllPostData = (data) => {
  const payload = data
  return {
    type: 'get_post',
    payload
  }
}

export const fetchAllPostData = () => {
  console.log("=================================== haihaiahai")
  return (dispatch) => {
    axios.get(`http://192.168.100.52:3000/pintaran`)
      .then((dataPost) => {
        dispatch(getAllPostData(dataPost.data))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}