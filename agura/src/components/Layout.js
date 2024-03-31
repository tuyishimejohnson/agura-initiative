import React from 'react'

const Layout = () => {
  return (
    <div>
      <nav className='flex justify-between items-center py-6 px-32'>
        <h1 className='text-2xl text-blue-900 font-extrabold'>Agura Initiative</h1>
        <ul className='flex gap-9'>
            <li className='navigation'>Home</li>
            <li className='navigation'>About us</li>
            <li className='navigation'>Services</li>
            <li className='navigation'>Contacts</li>
        </ul>

        <div>
            <ul className='flex gap-5'>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Layout
