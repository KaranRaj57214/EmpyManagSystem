
import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 mt-6 sm:mt-8 lg:mt-10 gap-3 sm:gap-5 w-full'>

      <div className='rounded-xl min-w-0 p-4 sm:py-6 sm:px-6 lg:px-9 bg-blue-400 text-black'>
        <h2 className='text-2xl sm:text-3xl font-bold'>
          {data.taskCounts.newTask}
        </h2>
        <h3 className='text-sm sm:text-lg lg:text-xl mt-1 font-medium'>
          New Task
        </h3>
      </div>

      <div className='rounded-xl min-w-0 p-4 sm:py-6 sm:px-6 lg:px-9 bg-green-400 text-black'>
        <h2 className='text-2xl sm:text-3xl font-bold'>
          {data.taskCounts.completed}
        </h2>
        <h3 className='text-sm sm:text-lg lg:text-xl mt-1 font-medium'>
          Completed Task
        </h3>
      </div>

      <div className='rounded-xl min-w-0 p-4 sm:py-6 sm:px-6 lg:px-9 bg-yellow-400 text-black'>
        <h2 className='text-2xl sm:text-3xl font-bold'>
          {data.taskCounts.active}
        </h2>
        <h3 className='text-sm sm:text-lg lg:text-xl mt-1 font-medium'>
          Accepted Task
        </h3>
      </div>

      <div className='rounded-xl min-w-0 p-4 sm:py-6 sm:px-6 lg:px-9 bg-red-400 text-black'>
        <h2 className='text-2xl sm:text-3xl font-bold'>
          {data.taskCounts.failed}
        </h2>
        <h3 className='text-sm sm:text-lg lg:text-xl mt-1 font-medium'>
          Failed Task
        </h3>
      </div>

    </div>
  )
}

export default TaskListNumbers
