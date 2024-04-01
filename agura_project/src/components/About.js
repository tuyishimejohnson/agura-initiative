import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import FooterForm from './FooterForm';

const About = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])


  return (
    <>
        <div className='lg:relative sm:relative' ref={headerRef}>
            <div>
                <img src={require('./images/domenico-loia-EhTcC9sYXsw-unsplash.jpg')} alt="" className=' w-full' style={{filter:'brightness(30%)', paddingTop: '5em' }}/>
            </div>

            <div className='lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-full text-white lg:px-32 sm:px-10 sm:absolute sm:top-4 '>
                <h1 className='lg:text-4xl lg:w-1/2 mb-8 sm:w-full sm:text-3xl lg:font-bold'>We engage with communities to enhance their digital skills.</h1>

                <div className='lg:flex lg:gap-4 sm:space-y-6'>

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

                <div className='flex justify-center items-center py-5 lg:text-xl sm:text-lg'>Explore more < FontAwesomeIcon icon={faAngleDoubleRight}/></div>
            </div>
        </div>

        < FooterForm />
    </>
  )
}

export default About
