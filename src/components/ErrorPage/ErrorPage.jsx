
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import banner from '../../assets/Picture.png'
import useTitle from '../../hooks/useTitle'

const ErrorPage = () => {

  useTitle('Error')

  const { error } = useRouteError()
  return (
    <div >

      {/* Error Picture */}

      <div className='flex items-center  p-16  ' style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "100% 100%",
        height: "100vh"
      }}>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>


          <div className='max-w-md text-center mt-40'>

            <p className='text-2xl font-semibold md:text-3xl text-red-400 mb-8'>
              {error?.message}
            </p>
            <Link to='/' className='btn bg-gradient-to-r from-red-800 to-red-600 border-none'>
              BACK To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
