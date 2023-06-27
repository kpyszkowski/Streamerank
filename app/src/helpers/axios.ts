import axios from 'axios'
import type { HeadersType } from '@/types'

const { VITE_API_URL } = import.meta.env

const instance = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  } as HeadersType,
})

export default instance
