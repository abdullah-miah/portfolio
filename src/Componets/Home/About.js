import React from 'react';

const About = () => {
    return (
        <div className='mx-12'>
        <h1 className='text-4xl font-bold text-center mt-8 underline-offset-8'>About Me</h1>
        <p className='text-center'>Why choice me!</p>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
         <div>
             <img  src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/man-vector-design-template-1ba90da9b45ecf00ceb3b8ae442ad32c_screen.jpg?ts=1601484738'></img>
         </div>
         <div className='mt-20 border-l-2 border-indigo-600'>
             <p className='ml-12 text-2xl'>
             Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional  willing to be an asset for an organization.
             </p>
             <div className='ml-12 mt-20'>
                 <h1 className='text-2xl font-bold text-warning'>Here are a Few Highlights:</h1>
                 <ul className='list-disc text-xl ml-12'>
                     <li>
                     Full Stack web and mobile development
                     </li>
                     <li>
                     Interactive Front End as per the design
                     </li>
                     <li>
                     React and React Native
                     </li>
                     <li>
                     Redux for State Mnanagement
                     </li>
                     <li>
                        Building REST API
                     </li>
                     <li>
                     Managing database
                     </li>
                 </ul>
                 <div className='mt-20'>
                <button class="btn btn-outline btn-success mr-20">Get Resume</button>
                <button class="btn btn-outline btn-info">Hire me!</button>
                </div>
             </div>
         </div>
        </div>
        </div>
    );
};

export default About;