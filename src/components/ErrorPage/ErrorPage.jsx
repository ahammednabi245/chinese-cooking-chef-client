
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      
        <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#6366f1" className="w-40 h-40">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        </h1>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-red-800'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-red-400 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='btn bg-gradient-to-r from-red-800 to-red-600 border-none'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
