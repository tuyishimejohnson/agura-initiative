import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
  return (
    <div>
      <nav className='flex justify-between items-center py-6 px-32 sm:py-3 sm:px-16'>
        <h1 className='text-2xl text-blue-900 font-extrabold'>Agura Initiative</h1>
        <ul className='flex gap-9 sm:hidden lg:flex'>
            <li className='navigation'>Home</li>
            <li className='navigation'>About us</li>
            <li className='navigation'>Services</li>
            <li className='navigation'>Contacts</li>
        </ul>

        <div>
            <ul className='flex gap-5 sm:hidden lg:flex'>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
            <div className='hidden sm:flex lg:hidden text-4xl text-blue-900 items-center'>
                < FontAwesomeIcon icon={faBars}/>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Layout
