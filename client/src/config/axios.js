import Axios from 'axios'

const axios = Axios.create({
    // baseURL: '/' // for prod
    baseURL: 'http://localhost:3010' // for dev
})

export default axios