
import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, onTaskStatusChange }) => {
  return (
    <div
      id='tasklist'
      className='w-full mt-6 sm:mt-8 lg:mt-10
      flex flex-col sm:flex-row sm:flex-nowrap
      gap-4 sm:gap-5
      sm:overflow-x-auto sm:overflow-y-hidden
      pb-4'
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return (
            <div key={idx} className='w-full sm:w-[300px] sm:min-w-[300px] sm:self-stretch'>
              <AcceptTask
                data={elem}
                taskIndex={idx}
                onTaskStatusChange={onTaskStatusChange}
              />
            </div>
          )
        }

        if (elem.newTask) {
          return (
            <div key={idx} className='w-full sm:w-[300px] sm:min-w-[300px] sm:self-stretch'>
              <NewTask
                data={elem}
                taskIndex={idx}
                onTaskStatusChange={onTaskStatusChange}
              />
            </div>
          )
        }

        if (elem.completed) {
          return (
            <div key={idx} className='w-full sm:w-[300px] sm:min-w-[300px] sm:self-stretch'>
              <CompleteTask data={elem} />
            </div>
          )
        }

        if (elem.failed) {
          return (
            <div key={idx} className='w-full sm:w-[300px] sm:min-w-[300px] sm:self-stretch'>
              <FailedTask data={elem} />
            </div>
          )
        }

        return null
      })}
    </div>
  )
}

export default TaskList
