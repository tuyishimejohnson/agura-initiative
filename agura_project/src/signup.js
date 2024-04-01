import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { SignUpSchema } from './Validations/signupValidation'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {

  const {handleSubmit, values, handleChange, errors} = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },

    validationSchema: SignUpSchema,
  })


  // The component for managing the scrolling behavior from the footer to the certain page.
  
  const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])
  
  return (
    <>
    <div>
        <div className='flex justify-center items-center h-screen' ref={headerRef}>
            <form action="" className='w-1/3 space-y-4' onSubmit={handleSubmit}>
            <h2 className='text-center font-bold text-3xl my-6'>Register here</h2>

            <div className='relative'>
              <input type="text" name='username' placeholder='Username' className='block w-full py-2 bg-transparent border border-blue-800 rounded-xl pl-3 focus:outline-none focus:border-blue-400'
                value={values.username}
                onChange={handleChange}
                />
                <FontAwesomeIcon icon={faUser} className='absolute top-2/4 right-5 translate-y-[-50%] transform'/>
            </div>
                
                {errors.username && <p className='text-red-400 text-xs'>{errors.username}</p>}
              
              <div className='relative'>
                <input type="email" name='email' placeholder='Email' className=' block w-full py-2 bg-transparent border border-blue-800 rounded-xl pl-3 focus:outline-none focus:border-blue-400'
                  value={values.email}
                  onChange={handleChange}
                  />
                <FontAwesomeIcon icon={faEnvelope} className='absolute right-5 top-2/4 transform translate-y-[-50%]'/>
              </div>
                
                 
                {errors.email && <p className='text-red-400 text-xs my-2'>{errors.email}</p>}
                
              <div className='relative'>
                <input type="password" name='password' placeholder='Password' className='block w-full py-2 bg-transparent border border-blue-800 rounded-xl pl-3 focus:outline-none focus:border-blue-400'
                value={values.password}
                onChange={handleChange}
                />
                <FontAwesomeIcon icon={faLock} className='absolute right-5 top-2/4 transform translate-y-[-50%]'/>
              </div>
                
                {errors.password && <p className='text-red-400 text-xs my-2'>{errors.password}</p>}
                
                <input type="password" name='confirmPassword' placeholder='Confirm password' className='block w-full py-2 bg-transparent border border-blue-800 rounded-xl pl-3 focus:outline-none focus:border-blue-400'
                value={values.confirmPassword}
                onChange={handleChange}
                />
                {errors.confirmPassword && <p className='text-red-400 text-xs my-2'>{errors.confirmPassword}</p>}
                <button type='submit' className='bg-white text-six py-2 px-7 mt-4 rounded-full hover:translate-x-2 transform transition'>Create account</button>
            </form>
        </div>
      
    </div>
    </>
    
  )
}

export default SignUp
