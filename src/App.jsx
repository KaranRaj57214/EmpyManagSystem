import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])
  
const handleLogin = (email, password) => {
  if (email === 'admin@me.com' && password === '123') {
    setUser('admin')
    setLoggedInUserData(null)

    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({ role: 'admin' })
    )
    return
  }

  const employee = userData?.find(
    (e) => e.email === email && e.password === password
  )

  if (employee) {
    setUser('employee')
    setLoggedInUserData(employee)

    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({
        role: 'employee',
        data: employee
      })
    )
  } else {
    alert('Invalid Credentials')
  }
}



 
const handleTaskStatusChange = (taskIndex, status) => {
  if (!loggedInUserData) return

  const updatedEmployees = userData.map((employee) => {
    if (employee.email !== loggedInUserData.email) {
      return employee
    }

    const updatedTasks = employee.tasks.map((task, index) => {
      if (index !== taskIndex) return task

      // Accept only a new task
      if (status === 'accepted') {
        if (!task.newTask) return task

        return {
          ...task,
          newTask: false,
          active: true,
          completed: false,
          failed: false,
        }
      }

      // Complete or fail only an active task
      if (!task.active) return task

      if (status === 'completed') {
        return {
          ...task,
          newTask: false,
          active: false,
          completed: true,
          failed: false,
        }
      }

      if (status === 'failed') {
        return {
          ...task,
          newTask: false,
          active: false,
          completed: false,
          failed: true,
        }
      }

      return task
    })

    // Recalculate all task counts
    const taskCounts = {
      newTask: updatedTasks.filter((task) => task.newTask).length,
      active: updatedTasks.filter((task) => task.active).length,
      completed: updatedTasks.filter((task) => task.completed).length,
      failed: updatedTasks.filter((task) => task.failed).length,
    }

    return {
      ...employee,
      tasks: updatedTasks,
      taskCounts,
    }
  })

  // Update shared employee state
  setUserData(updatedEmployees)

  // Save updated employee data
  localStorage.setItem('employees', JSON.stringify(updatedEmployees))

  // Update the current employee dashboard and login session
  const updatedEmployee = updatedEmployees.find(
    (employee) => employee.email === loggedInUserData.email
  )

  if (updatedEmployee) {
    setLoggedInUserData(updatedEmployee)

    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({
        role: 'employee',
        data: updatedEmployee,
      })
    )
  }
}
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
     {user === 'admin' ? (
  <AdminDashboard changeUser={setUser} />
    ) : user === 'employee' ? (
      <EmployeeDashboard
        changeUser={setUser}
        data={loggedInUserData}
        onTaskStatusChange={handleTaskStatusChange}
      />
    ) : null} </>
  )
}

export default App