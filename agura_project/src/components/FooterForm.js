import React from 'react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


const FooterForm = () => {
  const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])


  return (
    <div ref={headerRef} style={{paddingTop: '8em'}} className='bg-orange-100'>
      <h1 className='text-center py-4 text-3xl font-bold text-blue-900'>For more information reach to us</h1>
      <form action="" className='flex flex-col space-y-4 w-3/4 justify-center m-auto'>

        <div className='flex gap-5 justify-center'>
          <input type="text" name='name' id='name' placeholder='Name' className='w-full py-3 pl-2  bg-transparent border border-blue-800 rounded-md'/>

          <input type="email" name='email' id='email' placeholder='Email' className='w-full py-3 pl-2  bg-transparent border border-blue-800 rounded-md'/>
        </div>
          

          <input type="text" name='subject' id='subject' placeholder='Subject' className='w-full py-3 pl-2 bg-transparent border border-blue-800 rounded-md'/>

          <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='w-full pl-2 bg-transparent border border-blue-800 rounded-md'></textarea>
      </form>

      <div className='flex justify-center items-center bg-white py-10 mt-8'>
          <nav>
              <ul className='flex gap-5 items-center font-bold text-blue-800'>
                  <Link to='/' className='hover:text-blue-400 hover:translate-x-1 transition'>Home</Link>
                  <Link to='/About' className='hover:text-blue-400 hover:translate-x-1 transition'>About Us</Link>
                  <Link to='/Services' className='hover:text-blue-400 hover:translate-x-1 transition'>Services</Link>
                  <Link to='/Contacts' className='hover:text-blue-400 hover:translate-x-1 transition'>Contacts</Link>
              </ul>
          </nav>
      </div> 
    </div>
  )
}

export default FooterForm
