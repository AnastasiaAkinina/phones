import axios from 'axios'
import AxiosResponse from 'axios'
import type { iPhone } from '@/types/phone'

const getPhones = async (): Promise<AxiosResponse<iPhone>> => {
  return axios.get(import.meta.env.VITE_PHONES_URL + '/phones')
}

export const phonesApi = {
  getPhones
}
