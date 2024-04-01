import React from 'react'
import { useRef, useEffect } from 'react';

const Services = () => {
  const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])




  return (
    <div>
      <div className='px-32 flex' ref={headerRef} style={{paddingTop: '8em'}}>
        <div className=''>
            <img src={require('./images/christin-hume-Hcfwew744z4-unsplash.jpg')} alt="" className='w-full'/>
        </div>
            
       
        <div className='flex flex-col items-center justify-center px-7 mb-12'>
            <h1 className='text-2xl font-bold w-full'>Digital Skills awareness program.</h1>
            <p className=''>Individuals eager to broaden their digital expertise can engage in dynamic awareness initiatives aimed at boosting their technological literacy. These initiatives provide a platform for enthusiasts to immerse themselves in educational campaigns tailored to sharpening their understanding of digital concepts. Participants will have the opportunity to partake in a myriad of activities designed to deepen their knowledge and proficiency in navigating the digital landscape. By actively involving themselves in these campaigns, individuals can empower themselves with invaluable skills crucial for thriving in an increasingly digital-centric world. Don't miss out on the chance to join these transformative initiatives and unlock the full potential of your digital capabilities!</p>
        </div>
        
      </div>

      <div className='flex px-32'>           
       
        <div className='flex flex-col items-center justify-center px-7 mb-12'>
            <h1 className='text-2xl font-bold w-full'>Exhibition of Various business Operations from individuals.</h1>
            <p className=''>Individuals eager to broaden their digital expertise can engage in dynamic awareness initiatives aimed at boosting their technological literacy. These initiatives provide a platform for enthusiasts to immerse themselves in educational campaigns tailored to sharpening their understanding of digital concepts. Participants will have the opportunity to partake in a myriad of activities designed to deepen their knowledge and proficiency in navigating the digital landscape. By actively involving themselves in these campaigns, individuals can empower themselves with invaluable skills crucial for thriving in an increasingly digital-centric world. Don't miss out on the chance to join these transformative initiatives and unlock the full potential of your digital capabilities!</p>
        </div>

        <div className=''>
            <img src={require('./images/disruptivo-iQ15DTx-63k-unsplash.jpg')} alt="" className='w-full'/>
        </div>
        
      </div>
      <div className='flex px-32'>
        
            <img src={require('./images/guidance.jpg')} alt="" className='w-1/2 h-1/5'/>
            
       
        <div className='flex flex-col items-center justify-center px-7'>
            <h1 className='text-2xl font-bold w-full'>Career Guidance sessions.</h1>
            <p className=''>Individuals eager to broaden their digital expertise can engage in dynamic awareness initiatives aimed at boosting their technological literacy. These initiatives provide a platform for enthusiasts to immerse themselves in educational campaigns tailored to sharpening their understanding of digital concepts. Participants will have the opportunity to partake in a myriad of activities designed to deepen their knowledge and proficiency in navigating the digital landscape. By actively involving themselves in these campaigns, individuals can empower themselves with invaluable skills crucial for thriving in an increasingly digital-centric world. Don't miss out on the chance to join these transformative initiatives and unlock the full potential of your digital capabilities!</p>
        </div>
        
      </div>
    </div>
  )
}

export default Services
