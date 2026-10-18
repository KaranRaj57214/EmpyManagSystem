
import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-[#1C1C1C] px-4 py-8 text-white'>
            <div className='w-full max-w-md border border-emerald-600 rounded-2xl p-6 sm:p-10 md:p-12 shadow-lg shadow-emerald-950/30'>
                <div className='text-center mb-8'>
                    <h1 className='text-2xl sm:text-3xl font-bold'>
                        Welcome Back
                    </h1>
                    <p className='text-sm sm:text-base text-gray-400 mt-2'>
                        Log in to your Employee Management System
                    </p>
                </div>

                <form
                    onSubmit={submitHandler}
                    className='flex flex-col w-full'
                >
                    <label
                        htmlFor='loginEmail'
                        className='text-sm text-gray-300 mb-2'
                    >
                        Email Address
                    </label>
                    <input
                        id='loginEmail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete='username'
                        className='w-full min-w-0 outline-none bg-transparent border border-emerald-600 focus:ring-2 focus:ring-emerald-500 font-medium text-base py-3 px-4 rounded-lg placeholder:text-gray-500'
                        type='email'
                        placeholder='Enter your email'
                    />

                    <label
                        htmlFor='loginPassword'
                        className='text-sm text-gray-300 mt-5 mb-2'
                    >
                        Password
                    </label>
                    <input
                        id='loginPassword'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete='current-password'
                        className='w-full min-w-0 outline-none bg-transparent border border-emerald-600 focus:ring-2 focus:ring-emerald-500 font-medium text-base py-3 px-4 rounded-lg placeholder:text-gray-500'
                        type='password'
                        placeholder='Enter your password'
                    />

                    <button
                        type='submit'
                        className='mt-7 text-white font-semibold bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-base sm:text-lg py-3 px-6 w-full rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#1C1C1C]'
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
