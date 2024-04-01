import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { LoginSchema } from '../Validations/loginValidation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import FooterForm from './FooterForm';



const Login = () => {

  // Destructuring the formik components.
  const {values, handleChange, handleSubmit, errors, isSubmitting} = useFormik({
    initialValues: {
      username: '',
      password: ''
    },

    validationSchema: LoginSchema,
  })
 
  const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])

  return (
    
    <div className='text-blue-900' ref={headerRef}>
      <>
        <div className='flex justify-center items-center h-screen'>
            <form action="" className='w-1/3 space-y-4' onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold text-center'>Login</h2>

            <div className='relative'>
              <input type="text" name='username' placeholder='Username' className='w-full py-3 rounded bg-transparent border pl-2 focus:outline-none focus:ring-1 focus:border-second border-blue-800' 
                  value={values.username}
                  onChange={handleChange}
                  />

              <FontAwesomeIcon icon={faUser} className='top-2/4 right-5 translate-y-[-50%] transform absolute'/>
            </div>
                
                {errors.username && <p className='text-red-400 text-xs my-2'>{errors.username}</p>}

                <div className='relative'>
                  <input type="password" name='password' placeholder='Password' className='w-full py-3 rounded bg-transparent border pl-2 
                  focus:outline-none 
                  focus:ring-1 
                  focus:border-second
                  border-blue-800'
                  value={values.password}
                  onChange={handleChange} 
                  />
                  <FontAwesomeIcon icon={faLock} className='absolute top-2/4 translate-y-[-50%] right-5 transform'/>
                </div>
                
                {errors.password && <p className='text-red-400 text-xs'>{errors.password}</p>}
              <div className='flex justify-between'>
                <label><input type="checkbox" className='h-5 w-5 border-none mr-2 accent-four' name='checkbox'/>Remember me</label>
                <Link to='/ForgotPassword' className='hover:underline'>Forgot password?</Link>
              </div>

              <div className=''>
                <button type='submit' disabled={isSubmitting} className='block w-full border py-2 rounded-full border-blue-800 hover:text-white hover:bg-blue-800 active:bg-blue-700'>Login</button>
                
                <p className='mt-3'>Don't have an account? <Link to='/signup' className='hover:underline font-bold hover:translate-x-2 transition'>Register here</Link></p>

              </div>
            </form>
        </div>

        <FooterForm></FooterForm>

        <Outlet></Outlet>
      </>  
      
    </div>
  )
}

export default Login
