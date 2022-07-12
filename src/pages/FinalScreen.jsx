import React from 'react'
import { useSelector } from 'react-redux/es/exports';

export const FinalScreen = () => {
  const {
    score
  } = useSelector(state=>state)
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='m-4 text-4xl font-bold'>Quiz Completed</p>
      <p className='text-2xl font-bold bg-zinc-200 rounded-md p-4'>Final Score: {score}</p>
    </div>
  )
}
