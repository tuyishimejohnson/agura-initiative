import React from 'react';
import { Link } from 'react-router-dom';


const FooterForm = () => {

   return (
    <div  style={{paddingTop: '8em'}}  className=''>
      <h1 className='text-center py-4 text-3xl font-bold text-blue-900'>For more information reach to us</h1>
      <form action="" className='flex flex-col space-y-4 w-3/4 justify-center m-auto bg-gray-200 px-7 py-10 rounded-md'>

        <div className='flex gap-5 justify-center'>
          <input type="text" name='name' id='name' placeholder='Name' className='w-full py-3 pl-2  bg-transparent border border-blue-800 rounded-md'/>

          <input type="email" name='email' id='email' placeholder='Email' className='w-full py-3 pl-2  bg-transparent border border-blue-800 rounded-md'/>
        </div>
          

          <input type="text" name='subject' id='subject' placeholder='Subject' className='w-full py-3 pl-2 bg-transparent border border-blue-800 rounded-md'/>

          <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='w-full pl-2 bg-transparent border border-blue-800 rounded-md'></textarea>
          <button type='submit' className='bg-blue-800 text-white w-1/2 m-auto py-4 rounded-full hover:bg-blue-700 active:bg-blue-600'>Submit</button>
      </form>

      <div className='flex justify-center items-center bg-white py-10 mt-8'>
          <nav>
              <ul className='flex gap-5 items-center font-bold text-blue-800'>
                  <Link to='/' className='hover:text-blue-400 hover:translate-x-1 transition'>Home</Link>
                  <Link to='/AboutUs' className='hover:text-blue-400 hover:translate-x-1 transition'>About Us</Link>
                  <Link to='/ServicesProvided' className='hover:text-blue-400 hover:translate-x-1 transition'>Services</Link>
                  <Link to='/ContactUs' className='hover:text-blue-400 hover:translate-x-1 transition'>Contacts</Link>
              </ul>
          </nav>
      </div> 
    </div>
  )
}

export default FooterForm
