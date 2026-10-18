
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
        <div className="bg-[#1c1c1c] p-5 mt-5 rounded">

            <button
                type="button"
                onClick={() => setShowForm(!showForm)}
                className="bg-emerald-500 hover:bg-emerald-600
                text-white px-5 py-3 rounded text-sm font-medium"
            >
                {showForm ? 'Cancel' : '+ Add Employee'}
            </button>

            {showForm && (
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-wrap gap-4 mt-5"
                >
                    <div className="w-full md:w-[30%]">
                        <label className="block text-sm text-gray-300 mb-2">
                            Employee Name
                        </label>
                        <input
                            required
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="Enter employee name"
                            className="w-full p-2 rounded bg-transparent
                            border border-gray-500 outline-none"
                        />
                    </div>

                    <div className="w-full md:w-[30%]">
                        <label className="block text-sm text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="employee@example.com"
                            className="w-full p-2 rounded bg-transparent
                            border border-gray-500 outline-none"
                        />
                    </div>

                    <div className="w-full md:w-[30%]">
                        <label className="block text-sm text-gray-300 mb-2">
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            minLength={3}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Create password"
                            className="w-full p-2 rounded bg-transparent
                            border border-gray-500 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600
                        text-white px-5 py-2 rounded text-sm"
                    >
                        Save Employee
                    </button>
                </form>
            )}
        </div>
    )
}

export default AddEmployee
