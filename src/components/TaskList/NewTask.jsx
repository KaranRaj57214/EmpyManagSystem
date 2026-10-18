
import React from 'react'

const NewTask = ({ data, taskIndex, onTaskStatusChange }) => {
  return (
    <div className='w-full min-w-0 h-auto p-4 sm:p-5 bg-green-400 text-black rounded-xl flex flex-col'>
      <div className='flex justify-between items-start gap-3'>
        <h3 className='bg-red-600 text-white text-xs sm:text-sm px-3 py-1 rounded max-w-[60%] break-words'>
          {data.category}
        </h3>

        <h4 className='text-xs sm:text-sm shrink-0'>
          {data.taskDate}
        </h4>
      </div>

      <h2 className='mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold break-words'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-2 break-words whitespace-pre-wrap'>
        {data.taskDescription}
      </p>

      <div className='mt-5 sm:mt-6'>
        <button
          type='button'
          onClick={() => onTaskStatusChange(taskIndex, 'accepted')}
          className='w-full sm:w-auto bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded font-medium py-2.5 px-4 text-sm transition-colors'
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
