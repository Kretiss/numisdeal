import { useMutation } from '@tanstack/react-query'
import { api, queryClient } from '../index'

// TODO update child type from any
type TInput = {
  method: 'PUT' | 'POST'
  url: string
  child: any
  userId: string
}
const useExampleUpdateQuery = () =>
  useMutation(
    // eslint-disable-next-line no-unused-vars
    ({ method, url, child, userId }: TInput) =>
      method === 'PUT'
        ? api()
            .put(url, {
              json: child,
            })
            .json()
        : api()
            .post(url, {
              json: child,
            })
            .json(),
    {
      onSuccess: (data, variables) => {
        // Refetch this queries
        queryClient.invalidateQueries(['users', 'child', variables.userId])
      },
    }
  )

export default useExampleUpdateQuery
