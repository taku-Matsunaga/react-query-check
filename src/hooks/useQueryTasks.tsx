import axios from 'axios'
import { useQuery } from 'react-query'
import { Task } from '../types/types'

const getTasks = async () => {
  const { data } = await axios.get<Task[]>('http://127.0.0.1:8000/api/task/')
  return data
}

export const useQueryTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: 'tasks',
    queryFn: getTasks,
    cacheTime: 30000,
    staleTime: 30000,
  })
}
