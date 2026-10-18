
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const employeeName = asignTo.trim().toLowerCase()

        const employeeFound = userData.some(
            (employee) =>
                employee.firstName.toLowerCase() === employeeName
        )

        if (!employeeFound) {
            alert('Employee not found. Please check the employee name.')
            return
        }

        // A newly assigned task must not be active yet
        const task = {
            taskTitle: taskTitle.trim(),
            taskDescription: taskDescription.trim(),
            taskDate,
            category: category.trim(),
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        }

        const updatedEmployees = userData.map((employee) => {
            if (
                employee.firstName.toLowerCase() !== employeeName
            ) {
                return employee
            }

            const updatedTasks = [...employee.tasks, task]

            // Recalculate counts from actual task statuses
            const taskCounts = {
                newTask: updatedTasks.filter(
                    (task) => task.newTask
                ).length,
                active: updatedTasks.filter(
                    (task) => task.active
                ).length,
                completed: updatedTasks.filter(
                    (task) => task.completed
                ).length,
                failed: updatedTasks.filter(
                    (task) => task.failed
                ).length,
            }

            return {
                ...employee,
                tasks: updatedTasks,
                taskCounts,
            }
        })

        setUserData(updatedEmployees)

        localStorage.setItem(
            'employees',
            JSON.stringify(updatedEmployees)
        )

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

        alert('Task created successfully!')
    }

    const inputClass =
        'w-full min-w-0 text-sm py-3 px-3 rounded-md outline-none bg-transparent border border-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'

    const labelClass =
        'block text-sm text-gray-300 mb-2'

    return (
        <div className='w-full min-w-0 p-4 sm:p-5 bg-[#1c1c1c] mt-5 rounded-lg border border-gray-700'>
            <h2 className='text-lg sm:text-xl font-semibold mb-5'>
                Create New Task
            </h2>

            <form
                onSubmit={submitHandler}
                className='grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6'
            >
                {/* Left side: Task details */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 content-start'>
                    <div className='min-w-0'>
                        <label className={labelClass} htmlFor='taskTitle'>
                            Task Title
                        </label>
                        <input
                            id='taskTitle'
                            required
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className={inputClass}
                            type='text'
                            placeholder='Make a UI design'
                        />
                    </div>

                    <div className='min-w-0'>
                        <label className={labelClass} htmlFor='taskDate'>
                            Date
                        </label>
                        <input
                            id='taskDate'
                            required
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className={inputClass}
                            type='date'
                        />
                    </div>

                    <div className='min-w-0'>
                        <label className={labelClass} htmlFor='assignTo'>
                            Assign To
                        </label>
                        <input
                            id='assignTo'
                            required
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className={inputClass}
                            type='text'
                            placeholder='Employee name'
                        />
                    </div>

                    <div className='min-w-0'>
                        <label className={labelClass} htmlFor='category'>
                            Category
                        </label>
                        <input
                            id='category'
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className={inputClass}
                            type='text'
                            placeholder='Design, development, etc.'
                        />
                    </div>
                </div>

                {/* Right side: Description and submit */}
                <div className='flex flex-col min-w-0'>
                    <label className={labelClass} htmlFor='taskDescription'>
                        Description
                    </label>

                    <textarea
                        id='taskDescription'
                        value={taskDescription}
                        required
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className={`${inputClass} min-h-40 sm:min-h-48 resize-y`}
                        placeholder='Describe the task...'
                    />

                    <button
                        type='submit'
                        className='w-full sm:w-auto self-stretch sm:self-start bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white py-3 px-6 rounded-md text-sm font-medium mt-4 transition-colors'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
