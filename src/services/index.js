import axios from 'axios'
import AuthService from './auth'
import Qs from 'qs'
import {Auth} from '@/utils/auth'

const token = localStorage.getItem('token') || undefined

const BASE_URL = process.env.VUE_APP_SERVICE_URL
const httpClient = axios.create({
  baseURL: BASE_URL,
  paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' }),
  headers: {
    Authorization: `Bearer ${token}`
  }
})

httpClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    Auth.logout(error)
    return Promise.reject(error)
  }
)

export default {
  auth: AuthService(httpClient)
}
