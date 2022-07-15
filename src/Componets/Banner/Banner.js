import React from 'react';
import { Link } from 'react-scroll';
import { useTypewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index';

const Banner = () => {
    const {text} = useTypewriter({
        words: [ "MERN STACK DEVELOPER🌐"," FULL STACK DEVELOPER💻"," FRONT END DEVELOPER","REACT/NATIVE DEVELOPER"],
        loop: 0, 
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000
        })
    return (
        <div id='home' className='grid grid-cols-1 lg:grid-cols-2 mx-12 gap-4'>
            <div className='text-center mt-28'>
                <h1 className='text-4xl font-bold'>Hi, I'm <span className='text-warning text-5xl'>Abdullah</span></h1>
                <div className='mt-8'>
                <span className='text-3xl font-bold text-indigo-600'>
                {text}
                <span className='text-black'>|</span>
              </span>
                </div>
                <p className='mt-6 text-xl font-bold'>Building Web Application with Front-end and Backend</p>
                <p className='mt-2 text-xl font-bold'>One years Experience</p>
                <div
                 data-aos="fade-up-right" 
                 data-aos-delay="50"
                 ata-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className='mt-8'>
                <button class="btn btn-outline btn-success mr-20"><a target="_blank" href='https://drive.google.com/file/d/1orMZf_W7Ls9ja64roUeBJLrC2ODsqxR6/view?usp=sharing'> Get Resume</a></button>
                <button class="btn btn-outline btn-info">
                    <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>Hire me!</Link>
                </button>
                </div>
            </div>

            <div>
                <img src='https://img.freepik.com/free-vector/design-studio-concept-web-banner-woman-man-designers-team-create-website-layout_9209-7374.jpg?w=2000'></img>
            </div>
        </div>
    );
};

export default Banner;