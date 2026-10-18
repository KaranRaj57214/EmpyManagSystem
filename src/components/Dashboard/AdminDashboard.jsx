
import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import AddEmployee from '../other/AddEmployee'

const AdminDashboard = (props) => {
  return (
    <div className='min-h-screen w-full min-w-0 bg-[#1C1C1C] text-white p-4 sm:p-6 md:p-7 overflow-x-hidden overflow-y-auto'>
      <Header changeUser={props.changeUser} />

      <div className='mt-6 sm:mt-8'>
        <AddEmployee />
      </div>

      <div className='mt-6 sm:mt-8'>
        <CreateTask />
      </div>

      <div className='mt-6 sm:mt-8'>
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard
