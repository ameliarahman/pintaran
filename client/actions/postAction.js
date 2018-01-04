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
  return (dispatch) => {
    axios.get(`http://192.168.1.101:3000/pintaran`)
      .then((dataPost) => {
        dispatch(getAllPostData(dataPost.data))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}

export const fetchDataByCategory = (category) => {
  return (dispatch) => {
    axios.get(`http://192.168.1.101:3000/pintaran/${category}`)
      .then((dataPost) => {
        dispatch(getAllPostData(dataPost.data))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}