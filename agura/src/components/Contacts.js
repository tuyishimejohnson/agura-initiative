import React from 'react';


const Contacts = () => {
  return (
    <div>
      <form action="">
          <input type="text" name='name' id='name' placeholder='Name' />

          <input type="email" name='email' id='email' placeholder='Email' />

          <input type="text" name='subject' id='subject' placeholder='Subject'/>

          <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
      </form>
    </div>
  )
}

export default Contacts
