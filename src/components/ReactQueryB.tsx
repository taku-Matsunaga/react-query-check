import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import React from 'react'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Task } from '../types/types'

export const ReactQueryB: React.FC = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Task[]>('tasks')
  console.log('rendered ReactQuery B')

  return (
    <>
      <p className="font-bold my-3">ReactQueryB</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => navigate('/')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query A</p>
    </>
  )
}
