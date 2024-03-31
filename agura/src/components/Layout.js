import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const Layout = () => {
    const [changed, setChanged] = useState(false);
      useEffect(() => {
        const handlingScroll = () => {
          if(window.scrollY > 0) {
            setChanged(true);
          } else {
            setChanged(false);
          }
        };

        window.addEventListener('scroll', handlingScroll);

        return () => {
          window.removeEventListener('scroll', handlingScroll);
        };
        
      }, []);      


  return (

    

    <div>
      <nav className={`flex justify-between items-center lg:py-6 sm:py-3 sm:px-16 lg:px-32 fixed top-0 left-0 right-0 z-30 ${changed ? 'shadow-md shadow-gray-400 bg-orange-50' : 'bg-transparent'}`}>
        <h1 className='text-2xl text-blue-900 font-extrabold'>Agura Initiative</h1>
        <ul className='lg:gap-9 sm:hidden lg:flex'>
            <li className='navigation'>Home</li>
            <li className='navigation'>About us</li>
            <li className='navigation'>Services</li>
            <li className='navigation'>Contacts</li>
        </ul>
        
        <div>
            <ul className='flex items-center gap-5 sm:hidden lg:flex'>
                <li>Login</li>
                <li className='border hover:border-gray-400 hover:bg-transparent hover:text-black text-white bg-blue-900 px-6 py-2 rounded-md'>Sign Up</li>
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
