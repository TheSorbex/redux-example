import axios from './api'

const getPeople = async () => {
  try {
    const res = await axios.get('/people/')

    return res.data.results
  } catch (error) {
    return error
  }
}

export default {
  getPeople
}
