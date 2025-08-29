import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between w-full px-4 py-2 bg-white shadow-md">
            <nav className="w-full navbar bg-base-100">

                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                    <Link to="/" className="underline decoration-wavy underline-offset-4">
                        <img className='min-w-full' src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" alt="canva logo" />
                    </Link>
                </div>

                <div className="flex justify-end w-full lg:order-2"> {/* Added justify-end and items-center */}
                    <Link to="/login" className="px-4 py-2 mr-2 text-sm text-gray-800 rounded-lg hover:bg-gray-50 focus:ring-gray-300 focus:ring-4 lg:px-5 focus:outline-none lg:py-2.5">
                        Log in
                    </Link>
                    <Link to="#" className="px-4 py-2 mr-2 text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-orange-300 focus:ring-4 lg:px-5 focus:outline-none lg:py-2.5">
                        Get started
                    </Link>
                </div>

                <div className='items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1' id='mobile-menu-2'>
                    <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                        <li>
                            <NavLink to='/' className={({ isActive }) =>
                                ` ${isActive ?
                                    'text-orange-500 font-bold border-b-2 border-orange-500' :
                                    'text-gray-700 hover:text-orange-500'} `}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) =>
                                `${isActive ?
                                    'text-orange-500 font-bold border-b-2 border-orange-500' :
                                    'text-gray-700 hover:text-orange-500'} `}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) =>
                                ` ${isActive ?
                                    'text-orange-500 font-bold border-b-2 border-orange-500' :
                                    'text-gray-700 hover:text-orange-500'} `}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Header