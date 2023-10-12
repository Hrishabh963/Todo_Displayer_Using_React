import React from 'react'

export const Todos = ({title,id,isCompleted}) => {
  return (
    <div className='flex flex-col justify-between shadow-xl bg-slate-300 rounded-md basis-[30%] p-4 m-5 transform ease-in-out hover: hover:-translate-y-2 duration-150 hover:bg-slate-500' style={isCompleted?{backgroundColor:'lightgreen'} : null}>
      <strong className='text-xl p-4'>Todo no. {id}</strong>
      <p className='text-lg text-gray-800 px-4'>{title}</p>
      <p className='t-sm p-4'>{isCompleted ? 'Task completed': "Task pending"}</p>
    </div>
  )
}

