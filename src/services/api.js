import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://swapi.co/api/',
  responseType: 'json'
})

export default instance
