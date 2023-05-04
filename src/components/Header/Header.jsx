import React, { useContext, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {

    Bars4Icon,
    XMarkIcon,
    UserCircleIcon,
} from '@heroicons/react/24/solid'
import { AuthContext } from '../providers/AuthProvider'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const { user, logOut } = useContext(AuthContext);

    const location = useLocation();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


    return (
        <div className=' px-4   '>
            <div className='relative flex items-center '>
                {/* Logo Section */}
                <div className='navbar'>
                    <div className='navbar-start'>
                        <Link to='/' className='ml-2 text-xl font-bold tracking-wide text-white '>
                            Chinese Cooking Master
                        </Link>
                    </div>
                    {/* Nav Items Section */}
                    <div className='navbar-center'>
                        <ul className='items-center hidden space-x-8 lg:flex '>
                            <li className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-slate-400'>
                                <NavLink
                                    to='/'
                                    className={`nav-link ${location.pathname === '/' ? 'active text-red-500' : ''}`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-slate-400'>
                                <NavLink
                                    to='/blog'
                                    className={`nav-link ${location.pathname === '/blog' ? 'active text-red-500' : ''}`}
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='navbar-end'>

                        {user ? (
                            user.photoURL ? (
                                <img
                                    className='rounded-full mr-4'
                                    style={{ height: '55px' }}
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    title={user.displayName}
                                />
                            ) : (
                                <UserCircleIcon className='h-16 w-16 text-white' title={user.displayName} />
                            )
                        ) : null}




                        {user ?
                            <button onClick={handleLogOut} className="btn btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">Logout</button> :
                            <Link to="/login">
                                <button className="btn btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">Login</button>
                            </Link>
                        }


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
                        <Bars4Icon className='w-7 text-white' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 glass border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase'>
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
                                            <XMarkIcon className='w-7 text-8xl font-medium text-gray-100' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li className='default font-medium tracking-wide text-white transition-colors duration-200 hover:text-red-600'>
                                            <Link to='/' className={`nav-link ${location.pathname === '/' ? 'active text-red-500' : ''}`}>
                                                Home
                                            </Link>
                                        </li>


                                        <li className='default font-medium tracking-wide text-white transition-colors duration-200 hover:text-red-600'>
                                            <Link
                                                to='/blog'
                                                className={`nav-link ${location.pathname === '/blog' ? 'active text-red-500' : ''}`}
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        {user ? (
                                            user.photoURL ? (
                                                <img
                                                    className='rounded-full  mr-4'
                                                    style={{ height: '55px' }}
                                                    src={user.photoURL}
                                                    alt={user.displayName}
                                                    title={user.displayName}
                                                />
                                            ) : (
                                                <UserCircleIcon className='h-16 w-16 text-white' title={user.displayName} />
                                            )
                                        ) : null}
                                        {user ?
                                            <button onClick={handleLogOut} className="btn btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">Logout</button> :
                                            <Link to="/login">
                                                <button className="btn btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">Login</button>
                                            </Link>
                                        }

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
