import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterForm = () => {
    const phoneNumber = +2507888888;
    const email = 'j.tuyishime4@alustudent.com';
  return (
    <>
        <div className='mt-16'>
            <h1 className='text-3xl text-center font-bold text-blue-800 pb-4'>Do you have any inquiries</h1>
            <p className='text-center mb-10'>Fill out the form below, our team will get back to you soon.</p>

            <form action="" className='space-y-5 lg:px-32 sm:px-4'>
                <input type="text" name='name' id='name' placeholder='Name'className='w-full pl-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 bg-transparent border border-gray-400 rounded-full'/><br />

                <input type="email" name='email' id='email' placeholder='Email'className='w-full pl-3 py-2 bg-transparent border border-gray-400 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1'/><br />

                <input type="phone" name='phone' id='phone' placeholder='Phone number' className='w-full pl-3 py-2 bg-transparent border border-gray-400 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1'/><br />

                <input type="text" name='text' id='subject' placeholder='Subject' className='w-full pl-3 py-2 bg-transparent border border-gray-400 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1'/><br />

                <textarea name="message" id="message" cols="30" rows="10" className='w-full pl-3 py-2 bg-transparent border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1' placeholder='Message'></textarea>
                <div className='flex justify-center bg-blue-800 text-white py-3 shadow-md shadow-blue-500 rounded-sm hover:translate-x-1 active:bg-blue-700 transition'><button type='submit'>Submit</button></div>
            </form>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5535042083015!2d30.150342673212172!3d-1.9306257366661421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca77688d3131f%3A0x3a65f6d29a33c0d3!2sAfrican%20Leadership%20University!5e0!3m2!1sen!2srw!4v1707909736896!5m2!1sen!2srw" 
                    title="Google maps"
                    width="600" 
                    height="350" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade" className='mt-8 rounded-md w-full lg:px-32 sm:px-4'>

            </iframe>

            <div className='flex justify-evenly items-center lg:px-32 py-10'>
                <div className='flex flex-col items-center gap-3'>
                    < FontAwesomeIcon icon={faEnvelope} className='text-3xl text-blue-800 border border-blue-800 px-4 py-4 rounded-full'/>
                    <h3 className='font-bold'>Email</h3>
                    <p>{email}</p>
                </div>

                <div className='flex flex-col items-center gap-3'>
                    < FontAwesomeIcon icon={faPhone} className='text-3xl text-blue-800 border border-blue-800 px-4 py-4 rounded-full' />
                    <h3 className='font-bold'>Phone</h3>
                    <a href={'tel:' + phoneNumber}>{phoneNumber}</a>
                </div>
            </div>
                <div className='flex justify-center items-center bg-white py-10'>
                    <nav>
                        <ul className='flex gap-5 items-center font-bold text-blue-800'>
                            <li className='hover:text-blue-400'>Home</li>
                            <li className='hover:text-blue-400'>About Us</li>
                            <li className='hover:text-blue-400'>Services</li>
                            <li className='hover:text-blue-400'>Contacts</li>
                        </ul>
                    </nav>
                </div> 
        </div> 
    </>
  )
}

export default FooterForm