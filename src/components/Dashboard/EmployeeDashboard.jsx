
import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div  className="h-screen box-border p-4 sm:p-6 md:p-8 lg:p-10 bg-[#1C1C1C] w-full overflow-x-hidden overflow-y-auto text-white">
      <Header
        changeUser={props.changeUser}
        data={props.data}
      />

      <div className='mt-5 sm:mt-6'>
        <TaskListNumbers data={props.data} />
      </div>

      <div className='mt-5 sm:mt-6'>
        <TaskList
          data={props.data}
          onTaskStatusChange={props.onTaskStatusChange}
        />
      </div>
    </div>
  )
}

export default EmployeeDashboard
