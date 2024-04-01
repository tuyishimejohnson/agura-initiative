import React from 'react';
import { useRef, useEffect } from 'react';


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
          <input type="text" name='name' id='name' placeholder='Name' className='w-full py-3 pl-2'/>

          <input type="email" name='email' id='email' placeholder='Email' className='w-full py-3 pl-2'/>
        </div>
          

          <input type="text" name='subject' id='subject' placeholder='Subject' className='w-full py-3'/>

          <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='w-full pl-2'></textarea>
      </form>

      <footerForm></footerForm>
    </div>
  )
}

export default Contacts
