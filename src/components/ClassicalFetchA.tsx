import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useClassicalFetch } from '../hooks/useClassicalFetch'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ClassicalFetchA: React.FC = () => {
  const navigate = useNavigate()
  const { isLoading, isError, tasks } = useClassicalFetch()
  console.log('rendered classical fetch A')
  
  if (isLoading) return <div>{'Loading...'}</div>
  if (isError) return <div>{'Error'}</div>

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchA</p>

      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}

      <ChevronDoubleRightIcon
        onClick={() => navigate('/fetch-b')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch B</p>
    </div>
  )
}
