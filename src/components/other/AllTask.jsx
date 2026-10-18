
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData] = useContext(AuthContext)

    return (
        <div className='w-full min-w-0 bg-[#1c1c1c] p-3 sm:p-5 rounded-lg mt-5 border border-gray-700'>
            <h2 className='text-lg sm:text-xl font-semibold mb-4'>
                Employee Task Summary
            </h2>

            {/* Desktop and tablet table */}
            <div className='hidden sm:block w-full overflow-x-auto'>
                <div className='min-w-[600px]'>
                    <div className='bg-red-400 mb-2 py-3 px-4 flex items-center rounded-md text-black'>
                        <h3 className='text-sm md:text-base font-semibold w-[28%]'>
                            Employee Name
                        </h3>
                        <h3 className='text-sm md:text-base font-semibold w-[18%] text-center'>
                            New Task
                        </h3>
                        <h3 className='text-sm md:text-base font-semibold w-[18%] text-center'>
                            Active Task
                        </h3>
                        <h3 className='text-sm md:text-base font-semibold w-[18%] text-center'>
                            Completed
                        </h3>
                        <h3 className='text-sm md:text-base font-semibold w-[18%] text-center'>
                            Failed
                        </h3>
                    </div>

                    {userData.map((elem) => (
                        <div
                            key={elem.id}
                            className='border border-emerald-500 mb-2 py-3 px-4 flex items-center rounded-md'
                        >
                            <h3 className='text-sm md:text-base font-medium w-[28%] break-words'>
                                {elem.firstName}
                            </h3>
                            <p className='text-sm md:text-base font-semibold w-[18%] text-center text-blue-400'>
                                {elem.taskCounts.newTask}
                            </p>
                            <p className='text-sm md:text-base font-semibold w-[18%] text-center text-yellow-400'>
                                {elem.taskCounts.active}
                            </p>
                            <p className='text-sm md:text-base font-semibold w-[18%] text-center text-white'>
                                {elem.taskCounts.completed}
                            </p>
                            <p className='text-sm md:text-base font-semibold w-[18%] text-center text-red-400'>
                                {elem.taskCounts.failed}
                            </p>
                        </div>
                    ))}

                    {userData.length === 0 && (
                        <p className='text-gray-400 text-sm py-5 text-center'>
                            No employees added yet.
                        </p>
                    )}
                </div>
            </div>

            {/* Mobile employee cards */}
            <div className='sm:hidden flex flex-col gap-3'>
                {userData.map((elem) => (
                    <div
                        key={elem.id}
                        className='border border-emerald-500 rounded-lg p-4'
                    >
                        <h3 className='text-base font-semibold text-white mb-3 break-words'>
                            {elem.firstName}
                        </h3>

                        <div className='grid grid-cols-2 gap-3'>
                            <div className='bg-blue-400/10 rounded-md p-3'>
                                <p className='text-xs text-gray-400'>
                                    New Task
                                </p>
                                <p className='text-xl font-bold text-blue-400 mt-1'>
                                    {elem.taskCounts.newTask}
                                </p>
                            </div>

                            <div className='bg-yellow-400/10 rounded-md p-3'>
                                <p className='text-xs text-gray-400'>
                                    Active Task
                                </p>
                                <p className='text-xl font-bold text-yellow-400 mt-1'>
                                    {elem.taskCounts.active}
                                </p>
                            </div>

                            <div className='bg-white/5 rounded-md p-3'>
                                <p className='text-xs text-gray-400'>
                                    Completed
                                </p>
                                <p className='text-xl font-bold text-white mt-1'>
                                    {elem.taskCounts.completed}
                                </p>
                            </div>

                            <div className='bg-red-400/10 rounded-md p-3'>
                                <p className='text-xs text-gray-400'>
                                    Failed
                                </p>
                                <p className='text-xl font-bold text-red-400 mt-1'>
                                    {elem.taskCounts.failed}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                {userData.length === 0 && (
                    <p className='text-gray-400 text-sm py-5 text-center'>
                        No employees added yet.
                    </p>
                )}
            </div>
        </div>
    )
}

export default AllTask
