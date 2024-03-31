import React from 'react';
import { useRef, useEffect } from 'react';
import footerForm from './FooterForm';
import { Link } from 'react-router-dom';


const Contacts = () => {
  const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])


  return (
    <div ref={headerRef} style={{paddingTop: '8em'}}>
      <form action="" className='flex flex-col space-y-4 w-3/4 justify-center m-auto'>

        <div className='flex gap-5 justify-center'>
          <input type="text" name='name' id='name' placeholder='Name' className='w-full py-3 pl-2 bg-transparent border border-gray-600'/>

          <input type="email" name='email' id='email' placeholder='Email' className='w-full py-3 pl-2 bg-transparent border border-gray-600'/>
        </div>
          

          <input type="text" name='subject' id='subject' placeholder='Subject' className='w-full py-3 bg-transparent border border-gray-600 pl-2'/>

          <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='w-full pl-2 bg-transparent border border-gray-600'></textarea>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5535042083015!2d30.150342673212172!3d-1.9306257366661421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca77688d3131f%3A0x3a65f6d29a33c0d3!2sAfrican%20Leadership%20University!5e0!3m2!1sen!2srw!4v1707909736896!5m2!1sen!2srw" 
                    title="Google maps"
                    width="600" 
                    height="350" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade" className='mt-8 rounded-md w-full'>

            </iframe>
      </form>

      <div className='flex justify-center items-center bg-white py-10'>
                    <nav>
                        <ul className='flex gap-5 items-center font-bold text-blue-800'>
                            <Link to='/' className='hover:text-blue-400 hover:translate-x-1 transition'>Home</Link>
                            <Link to='/About' className='hover:text-blue-400 hover:translate-x-1 transition'>About Us</Link>
                            <Link to='/Services'className='hover:text-blue-400 hover:translate-x-1 transition'>Services</Link>
                            <Link to='/Contacts' className='hover:text-blue-400 hover:translate-x-1 transition'>Contacts</Link>
                        </ul>
                    </nav>
                </div> 
    
    </div>


  )
}



export default Contacts
