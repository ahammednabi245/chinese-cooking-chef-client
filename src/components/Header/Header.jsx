import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    BoltIcon,
    Bars4Icon,
    XMarkIcon,
    UserCircleIcon,
} from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className=' px-4 -mt-8  '>
            <div className='relative flex items-center '>
                {/* Logo Section */}
                <div className='navbar'>
                    <div className='navbar-start'>
                        <Link to='/' className='ml-2 text-xl font-bold tracking-wide text-white '>
                        Chinese Master
                        </Link>
                    </div>
                    {/* Nav Items Section */}
                    <div className='navbar-center'>
                        <ul className='items-center hidden space-x-8 lg:flex '>
                            <li className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400'>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400'>
                                <NavLink
                                    to='/blog'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='navbar-end'>
                    < UserCircleIcon className='h-16 w-16 text-white'></UserCircleIcon>
                        <button className="btn btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">Login</button>
                    </div>
                </div>
                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars4Icon className='w-5 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                        Chinese Master
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='default font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'>
                                                Home
                                            </Link>
                                        </li>
                                       
                                     
                                        <li>
                                            <Link
                                                to='/blog'
                                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                                            >
                                               Blog
                                            </Link>
                                        </li>
                                        < UserCircleIcon className='h-16 w-16 '></UserCircleIcon>
                                        <button className="btn btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">Login</button>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
