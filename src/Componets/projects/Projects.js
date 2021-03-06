import React from 'react';
import { Element } from 'react-scroll';

const Projects = () => {
    return (
        <div className='mx-12'>
           <Element id='projects' name='projects'>
           <div className='text-center mt-20'
           data-aos="zoom-in-down"  
           data-aos-delay="50"
           ata-aos-offset="200"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out"
       data-aos-mirror="true"
       data-aos-once="false"
           >
            <h1 className='text-3xl font-bold'>My work Here!</h1>
            <p>Best projects</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12'>
             <div 
             data-aos="fade-up-right" 
             data-aos-delay="50"
             ata-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
             className='border-2 border-indigo-400 rounded-lg pb-12'>
                 <img className='p-4' src='https://i.ibb.co/TYQgC2Z/tools-mart.png'></img>
                 <h1 className='text-2xl font-bold mx-12'>Tools Mart</h1>
                 <p className='mx-12 mt-6 text-xl'>Full MERN stack web site.  Manufactured company sells her product and manage them easily here.</p>
                 <div className='mx-12 mt-6'>
                     <h1> Source Code:</h1>
                 <button class="btn btn-sm mr-8">
                    <a target='_blank' href='https://github.com/abdullah-miah/tools_mart_server'>Server</a>
                 </button>
                 <button class="btn btn-sm">
                    <a target='_blank' href='https://github.com/abdullah-miah/tools_mart_client'>Client</a>
                 </button>
                 <button class="btn btn-outline btn-primary mt-6 lg:ml-12">
                    <a target='_blank' href='https://incandescent-sunburst-9d3dfd.netlify.app/'>Live Preview</a>
                 </button>
                 </div>
             </div>
             <div 
             data-aos="fade-down" 
             data-aos-delay="50"
             ata-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
             className='border-2 border-indigo-400 rounded-lg pb-12'>
                 <img className='p-4' src='https://i.ibb.co/bsBQLTP/smart-hub.png'></img>
                 <h1 className='text-2xl font-bold mx-12'>Smart Hub</h1>
                 <p className='mx-12 mt-6 text-xl'>Full MERN stack web site.  Manufactured company warehouse Mnanagement and sells product  them easily here.</p>
                 <div className='mx-12 mt-6'>
                     <h1> Source Code:</h1>
                 <button class="btn btn-sm mr-8">
                 <a target='_blank' href='https://github.com/abdullah-miah/warehouse-management-server'>Server</a>
                 </button>
                 <button class="btn btn-sm">
                 <a target='_blank' href='https://github.com/abdullah-miah/-warehouse-management-client'>Client</a>
                 </button>
                 <button class="btn btn-outline btn-primary mt-6 lg:ml-12">
                 <a target='_blank' href='https://shiny-stroopwafel-390d77.netlify.app/'>Live Preview</a>
                 </button>
                 </div>
             </div>
             <div
             data-aos="fade-left" 
             data-aos-delay="50"
             ata-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
             className='border-2 border-indigo-400 rounded-lg pb-12'>
                 <img className='p-4' src='https://i.ibb.co/2ZFXftk/photography-ab.png'></img>
                 <h1 className='text-2xl font-bold mx-12'>photography with AB</h1>
                 <p className='mx-12 mt-6 text-xl'>React.JS web site.  Professional Photographer can easily recived her client event mangent and others things.</p>
                 <div className='mx-12 mt-6'>
                     <h1> Source Code:</h1>
                 
                 <button class="btn btn-sm">
                 <a target='_blank' href='https://github.com/abdullah-miah/-independent-service-provider'>Client</a>
                 </button>
                 <button class="btn btn-outline btn-primary mt-6 lg:ml-12">
                 <a target='_blank' href='https://funny-rabanadas-6b8791.netlify.app/'>Live Preview</a>
                 </button>
                 </div>
             </div>
            </div>
           </Element>
        </div>
    );
};

export default Projects;