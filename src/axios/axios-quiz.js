import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-a2112.firebaseio.com/'
})