import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

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
        <Link to='/'><h1 className='text-2xl text-blue-900 font-extrabold'>Agura Initiative</h1></Link>
        <ul className='lg:gap-9 sm:hidden lg:flex'>
            <Link to="/" className='navigation'>Homes</Link>
            <Link to="/About" className='navigation'>About us</Link>
            <Link to="/Services" className='navigation'>Services</Link>
            <Link to="Contacts" className='navigation'>Contacts</Link>
        </ul>
        
        <div>
            <ul className='flex items-center gap-5 sm:hidden lg:flex'>
                <Link to='/Login'>Login</Link>
                <Link to='/signup' className='border hover:border-gray-400 hover:bg-transparent hover:text-black text-white bg-blue-900 px-6 py-2 rounded-md'>Sign Up</Link>
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
