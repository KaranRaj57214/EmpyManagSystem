
import React from 'react'

const Header = (props) => {
  const username = props.data?.firstName || 'Admin'

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }

  return (
    <div className='w-full flex flex-wrap items-center justify-between gap-4'>
      <h1 className='text-lg sm:text-2xl font-medium min-w-0'>
        Hello
        <br />
        <span className='text-2xl sm:text-3xl font-semibold break-words'>
          {username} 👋
        </span>
      </h1>

      <button
        type='button'
        onClick={logOutUser}
        className='bg-red-600 hover:bg-red-700 active:bg-red-800 text-sm sm:text-base font-medium text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md shrink-0 transition-colors'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
