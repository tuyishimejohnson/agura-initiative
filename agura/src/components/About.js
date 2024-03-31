import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
        <div className='relative'>

        
            <div >
                <img src={require('./images/domenico-loia-EhTcC9sYXsw-unsplash.jpg')} alt="" className='h-screen w-full' style={{filter:'brightness(30%)'}}/>
            </div>

            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white px-32'>
                <h1 className='text-4xl w-1/2 mb-8'>We engage with communities to enhance their digital skills</h1>

                <div className='flex gap-4'>
                    <div className='shadow shadow-gray-400 rounded-md px-4 py-3 bg-blue-900'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur unde veritatis impedit quis voluptas error, voluptate praesentium beatae molestias recusandae enim laudantium totam esse sed eius? Facilis atque veritatis similique.
                    </div>
                    <div className='shadow shadow-gray-400 rounded-md px-4 py-3 bg-blue-900'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur unde veritatis impedit quis voluptas error, voluptate praesentium beatae molestias recusandae enim laudantium totam esse sed eius? Facilis atque veritatis similique.
                    </div>
                    <div className='shadow shadow-gray-400 rounded-md px-4 py-3 bg-blue-900'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur unde veritatis impedit quis voluptas error, voluptate praesentium beatae molestias recusandae enim laudantium totam esse sed eius? Facilis atque veritatis similique.
                    </div>
                </div>

                <div className='flex justify-center items-center py-5'>Explore more < FontAwesomeIcon icon={faAngleDoubleRight}/></div>
                
            </div>

        </div>
      
    </>
  )
}

export default About
