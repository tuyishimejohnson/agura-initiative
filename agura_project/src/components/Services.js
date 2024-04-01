import React from 'react'
import { useRef, useEffect } from 'react';
import FooterForm from './FooterForm';

const Services = () => {
  const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])




  return (
    <div className='space-y-10'>
      <div className='px-32 flex' ref={headerRef} style={{paddingTop: '8em'}}>
        
          <img src={require('./images/christin-hume-Hcfwew744z4-unsplash.jpg')} alt="" className='w-1/2'/>
        
            
       
        <div className='flex flex-col items-center justify-center px-7 mb-12'>
            <h1 className='text-2xl font-bold w-full'>Digital Skills awareness program.</h1>
            <p className=''>Individuals eager to broaden their digital expertise can engage in dynamic awareness initiatives aimed at boosting their technological literacy. These initiatives provide a platform for enthusiasts to immerse themselves in educational campaigns tailored to sharpening their understanding of digital concepts. Participants will have the opportunity to partake in a myriad of activities designed to deepen their knowledge and proficiency in navigating the digital landscape.</p>
        </div>
        
      </div>

      <div className='flex px-32'>           
       
        <div className='flex flex-col items-center justify-center px-7 mb-12'>
            <h1 className='text-2xl font-bold'>Exhibition of Various business Operations from individuals.</h1>
            <p className=''> As the majority of rural communities are engaged in agricultural activities, this is an opportunity them to showcase their profiles by listing their business offerings on the platform, enticing potential customers to engage with their products and services, facilitating a dynamic interaction between sellers and consumers, and fostering a thriving marketplace environment.</p>
        </div>

        <img src={require('./images/working_in_field2.jpg')} alt="" className='w-1/2'/>
      </div>
      <div className='flex px-32'>
        
        <img src={require('./images/guidance.jpg')} alt="" className='w-1/2 h-1/5'/>
        <div className='flex flex-col items-center justify-center px-7'>
            <h1 className='text-2xl font-bold w-full'>Career Guidance sessions.</h1>
            <p className=''>We offer a personalized guidance and valuable insights for navigating career choices, along with effective strategies to enhance existing career paths by providing both individual and group sessions, conducted either in person or through virtual meetings, ensuring tailored support to meet diverse needs and preferences.</p>
        </div>
        
      </div>

      < FooterForm />
    </div>
  )
}

export default Services
