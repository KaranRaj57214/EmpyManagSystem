
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AddEmployee = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [showForm, setShowForm] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const cleanName = firstName.trim()
        const cleanEmail = email.trim().toLowerCase()

        // Check for duplicate email
        const emailExists = userData.some(
            employee =>
                employee.email.toLowerCase() === cleanEmail
        )

        if (emailExists) {
            alert('An employee with this email already exists.')
            return
        }

        // Generate a unique ID
        const newId = userData.reduce(
            (maxId, employee) =>
                Math.max(maxId, Number(employee.id) || 0),
            0
        ) + 1

        const newEmployee = {
            id: newId,
            firstName: cleanName,
            email: cleanEmail,
            password,
            taskCounts: {
                active: 0,
                newTask: 0,
                completed: 0,
                failed: 0
            },
            tasks: []
        }

        // Update React Context
        const updatedEmployees = [...userData, newEmployee]
        setUserData(updatedEmployees)

        // Save all employees to localStorage
        localStorage.setItem(
            'employees',
            JSON.stringify(updatedEmployees)
        )

        setFirstName('')
        setEmail('')
        setPassword('')
        setShowForm(false)

        alert(`Employee ${cleanName} added successfully!`)
    }

    return (
        <div className='w-full min-w-0 bg-[#1c1c1c] p-4 sm:p-5 mt-5 rounded-lg border border-gray-700'>

            <button
                type='button'
                onClick={() => setShowForm(!showForm)}
                aria-expanded={showForm}
                className='w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white px-5 py-3 rounded-md text-sm font-medium transition-colors'
            >
                {showForm ? 'Cancel' : '+ Add Employee'}
            </button>

            {showForm && (
                <form
                    onSubmit={handleSubmit}
                    className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 mt-5'
                >
                    <div className='min-w-0'>
                        <label
                            htmlFor='employeeName'
                            className='block text-sm text-gray-300 mb-2'
                        >
                            Employee Name
                        </label>
                        <input
                            id='employeeName'
                            required
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder='Enter employee name'
                            autoComplete='name'
                            className='w-full min-w-0 p-3 rounded-md bg-transparent text-white border border-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none'
                        />
                    </div>

                    <div className='min-w-0'>
                        <label
                            htmlFor='employeeEmail'
                            className='block text-sm text-gray-300 mb-2'
                        >
                            Email
                        </label>
                        <input
                            id='employeeEmail'
                            required
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='employee@example.com'
                            autoComplete='email'
                            className='w-full min-w-0 p-3 rounded-md bg-transparent text-white border border-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none'
                        />
                    </div>

                    <div className='min-w-0'>
                        <label
                            htmlFor='employeePassword'
                            className='block text-sm text-gray-300 mb-2'
                        >
                            Password
                        </label>
                        <input
                            id='employeePassword'
                            required
                            type='password'
                            minLength={3}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='Create password'
                            autoComplete='new-password'
                            className='w-full min-w-0 p-3 rounded-md bg-transparent text-white border border-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none'
                        />
                    </div>

                    <div className='col-span-1 md:col-span-2 xl:col-span-3'>
                        <button
                            type='submit'
                            className='w-full sm:w-auto bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors'
                        >
                            Save Employee
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default AddEmployee
