import React from 'react';
import { Element, Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {
    return (
        <div className='mx-12'>
        <Element id='about' name='about'>
        <div
        data-aos="zoom-in-down"  
        data-aos-delay="50"
        ata-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
        >
        <h1 className='text-4xl font-bold text-center mt-8 underline-offset-8'>About Me</h1>
        <p className='text-center'>Why choice me!</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
         <div>
             <img  src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/man-vector-design-template-1ba90da9b45ecf00ceb3b8ae442ad32c_screen.jpg?ts=1601484738'></img>
         </div>
         <div className='mt-20 border-l-2 border-indigo-600'>
             <p className='ml-12 text-2xl'>
             Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional  willing to be an asset for an organization.
             </p>
             <div className='ml-12 mt-20' 
             data-aos="fade-left" 
             data-aos-delay="50"
             ata-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
             >
                 <h1 className='text-2xl font-bold text-warning'>Here are a Few Highlights:</h1>
                 <ul className='list-disc text-xl ml-12'>
                     <li className='text-info text-3xl'>
                    <div className='text-black text-xl'> Full Stack web and mobile development</div>
                     </li>
                     <li className='text-info text-3xl'>
                     <div className='text-black text-xl'>Interactive Front End as per the design</div>
                     </li>
                     <li className='text-info text-3xl'>
                     <div className='text-black text-xl'>React and React Native</div>
                     </li>
                     <li className='text-info text-3xl'>
                      <div className='text-black text-xl'>  Redux for State Mnanagement</div>
                     </li>
                     <li className='text-info text-3xl' >
                        <div className='text-black text-xl'> Building REST API</div>
                     </li>
                     <li className='text-info text-3xl' >
                     <div className='text-black text-xl'> Managing database</div>
                     </li>
                 </ul>
                 
                 <div
                 data-aos="fade-up-left" 
                 data-aos-delay="50"
                 ata-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
               
                 className='mt-20'>
                <button class="btn btn-outline btn-success mr-20">Get Resume</button>
                <button class="btn btn-outline btn-info">
                <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>Hire me!</Link>
                </button>
                </div>
             </div>
         </div>
        </div>
        </Element>
        </div>
    );
};

export default About;