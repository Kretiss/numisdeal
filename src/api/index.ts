import ky from 'ky'
import { QueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

// Setup queryClient
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      // staleTime: 5000
    },
  },
})

type BaseOptions = {
  handledCodes?: number[]
  throwErr?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// TODO Don`t know exact errors format for now, will be edited
const processError = (error: any) => {
  const { message } = error
  let additionalData = ''
  if (error && error.errors)
    additionalData = Array.isArray(error.errors)
      ? error.errors.join(', ')
      : `${error.errors}`

  return `${error.status}: ${message}${additionalData}`
}

const baseApi = ({ handledCodes, throwErr = true }: BaseOptions) =>
  ky.extend({
    timeout: 30000,
    // throwHttpErrors: false,
    retry: 0,
    hooks: {
      afterResponse: [
        // Handle errors
        async (_request, _options, response) => {
          if (response.ok) return
          // eslint-disable-next-line consistent-return
          if (!throwErr) return response

          if (handledCodes?.find((c) => c === response.status)) {
            return
          }

          const error = await response.json()
          // eslint-disable-next-line no-console
          console.error(error)
          toast.error(processError(error))
          throw error
        },
      ],
    },
  })

type Options = {
  skipToken?: boolean
} & BaseOptions

// Used for fetching data with React Query
export const api = ({ skipToken, ...base }: Options = {}) =>
  baseApi(base).extend({
    prefixUrl: '/api',
    hooks: {
      beforeRequest: [
        // TODO Add auth token
      ],
      afterResponse: [
        // TODO If there is new token, save it for next use
      ],
    },
  })
