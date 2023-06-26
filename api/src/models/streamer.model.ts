import { Schema, model } from 'mongoose'

const streamerSchema = new Schema({
  fullName: {
    type: String,
    maxLength: 72,
    required: true,
  },
  nickName: {
    type: String,
    maxLength: 48,
    required: true,
  },
  platform: {
    type: String,
    enum: ['twitch', 'youtube', 'tiktok', 'kick', 'rumble'],
    required: true,
  },
  streamingUrl: {
    type: String,
    maxLength: 128,
    required: true,
  },
  facebookUrl: {
    type: String,
    maxLength: 128,
  },
  instagramUrl: {
    type: String,
    maxLength: 128,
  },
  description: {
    type: String,
    maxLength: 512,
    required: true,
  },
  upVotes: {
    type: Number,
    default: 0,
  },
  downVotes: {
    type: Number,
    default: 0,
  },
})

export const StreamerModel = model('Streamer', streamerSchema)
