import { AkapenApi } from '@/api/typescript-axios'
import { Configuration } from '@/api/typescript-axios/configuration'
import axios from 'axios'

const { API_URL } = import.meta.env

const config = new Configuration({
  basePath: API_URL
})

const axiosInstance = axios.create({
  baseURL: API_URL
})

const akapenApi = new AkapenApi(config, '', axiosInstance)

export { akapenApi }
