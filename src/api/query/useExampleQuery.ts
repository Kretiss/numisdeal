import { useQuery } from '@tanstack/react-query'
import { api } from '../index'

const useExampleQuery = () =>
  useQuery(['exampleKey'], () => api().get(``).json<[]>())

export default useExampleQuery
