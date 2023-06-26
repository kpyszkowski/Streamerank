import * as yup from 'yup'

const requiredMessage = 'This field is required.'
const urlMessage = 'This field is not a valid URL.'
const urlRegexMessage = (name: string) => `This is not valid ${name} url.`
const tooLongMessage = (length: number) =>
  `This value is too long, max ${length} characters.`

export const streamerSchema = yup
  .object({
    fullName: yup
      .string()
      .required(requiredMessage)
      .max(72, tooLongMessage(72)),
    nickName: yup
      .string()
      .required(requiredMessage)
      .max(48, tooLongMessage(48)),
    platform: yup
      .string()
      .oneOf(
        ['twitch', 'youtube', 'tiktok', 'kick', 'rumble'],
        'Streaming platform must be one of the following values: Twitch, YouTube, TikTok, Kick, Rumble.',
      )
      .required(requiredMessage),
    streamingUrl: yup.string().required(requiredMessage).url(urlMessage),
    facebookUrl: yup
      .string()
      .url(urlMessage)
      .matches(/facebook|^$/, urlRegexMessage('Facebook')),
    instagramUrl: yup
      .string()
      .url(urlMessage)
      .matches(/instagram|^$/, urlRegexMessage('Instagram')),
    description: yup
      .string()
      .required(requiredMessage)
      .max(512, tooLongMessage(512)),
  })
  .required()
  .noUnknown(true)
  .strict()
