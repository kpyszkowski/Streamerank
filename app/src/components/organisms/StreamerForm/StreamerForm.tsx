import { Button, FormField, Message, Modal } from '@/components'
import {
  StyledContainer,
  StyledForm,
  StyledParagraph,
} from '@/components/organisms/StreamerForm/StreamerForm.styled'
import { streamerSchema } from 'schemas'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import type { StreamerFormProps } from '@/components/organisms/StreamerForm/StreamerForm.types'
import { useStreamerFormState } from '@/store'
import { useCallback } from 'react'
import { postStreamer } from '@/helpers'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { StreamerType } from 'types'
import 'twin.macro'

function StreamerForm(props: StreamerFormProps) {
  const { children, modalStateSetter } = props
  const queryClient = useQueryClient()
  const { setData, clearData, ...defaultValues } = useStreamerFormState()
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm({
    // @ts-ignore TODO: Fix resolver typings issue related with defaultValues
    resolver: yupResolver(streamerSchema),
    defaultValues,
  })
  const { mutate, isError } = useMutation({
    mutationFn: postStreamer,
    onSuccess: () => {
      queryClient.invalidateQueries(['streamers'])
      clearData()
      modalStateSetter(false)
    },
  })

  const handleMutation = useCallback(
    (data: StreamerType) => {
      mutate(data, { onSuccess: () => reset() })
    },
    [mutate, reset],
  )

  const handleFormStatePersistence = useCallback(() => {
    const formState = getValues()
    setData(formState)
  }, [getValues, setData])

  return (
    <Modal
      setVisible={modalStateSetter}
      onClose={handleFormStatePersistence}
    >
      <Modal.Header>Submit your streamer</Modal.Header>
      <StyledForm onSubmit={handleSubmit(handleMutation)}>
        <Modal.Content>
          <StyledContainer {...props}>
            <StyledParagraph>{children}</StyledParagraph>
            <FormField
              label="Full name"
              placeholder="eg. John Doe"
              {...register('fullName')}
              errorMessage={errors.fullName?.message}
            />
            <FormField
              label="Nick name"
              placeholder="eg. StreamerGuy12"
              {...register('nickName')}
              errorMessage={errors.nickName?.message}
            />
            <FormField
              as="select"
              label="Streaming platform"
              placeholder="Eg. Twitch, YouTube..."
              options={[
                { label: 'Twitch', value: 'twitch' },
                { label: 'YouTube', value: 'youtube' },
                { label: 'TikTok', value: 'tiktok' },
                { label: 'Kick', value: 'kick' },
                { label: 'Rumble', value: 'rumble' },
              ]}
              {...register('platform')}
              errorMessage={errors.platform?.message}
            />
            <FormField
              label="Streaming channel URL"
              placeholder="https://..."
              {...register('streamingUrl')}
              errorMessage={errors.streamingUrl?.message}
            />
            <FormField
              label="Facebook profile URL"
              placeholder="https://..."
              {...register('facebookUrl')}
              errorMessage={errors.facebookUrl?.message}
            />
            <FormField
              label="Instagram profile URL"
              placeholder="https://..."
              {...register('instagramUrl')}
              errorMessage={errors.instagramUrl?.message}
            />
            <FormField
              as="textarea"
              label="Short description"
              placeholder="eg. He has truely wonderful live streams..."
              {...register('description')}
              errorMessage={errors.description?.message}
            />
          </StyledContainer>
        </Modal.Content>
        <Modal.Footer>
          {isError && (
            <Message
              variant="error"
              tw="mr-auto"
            >
              Oh no, we couldn't submit your streamer.
              <br /> Please try again later.
            </Message>
          )}
          <Button>Submit</Button>
        </Modal.Footer>
      </StyledForm>
    </Modal>
  )
}

export default StreamerForm
