import axios from 'axios'
import type { HeadersType } from '@/types'
import type { StreamerRecordType, StreamerType } from 'types'

const { VITE_API_URL } = import.meta.env

const instance = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  } as HeadersType,
})

export const postStreamer = async (data: StreamerType) => {
  const response = await instance.post('/streamers', data)
  return response
}

export const getStreamers = async (): Promise<StreamerRecordType[]> => {
  const { data } = await instance.get('/streamers')

  const { data: streamers } = data
  return streamers
}

export const getStreamer = async (
  streamerId: string,
): Promise<StreamerRecordType> => {
  const { data } = await instance.get(`/streamer/${streamerId}`)
  const { data: streamers } = data
  return streamers
}

export const upVoteStreamer = async (streamerId: string) => {
  const response = await instance.put(`/streamers/${streamerId}/vote/up`)
  return response
}

export const downVoteStreamer = async (streamerId: string) => {
  const response = await instance.put(`/streamers/${streamerId}/vote/down`)
  return response
}
