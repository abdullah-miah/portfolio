import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-12 gap-4'>
            <div className='text-center mt-28'>
                <h1 className='text-4xl font-bold'>Hi, I'm <span className='text-warning text-5xl'>Abdullah</span></h1>
                <h1 className='mt-6 text-3xl text-success font-bold'>MERN <span className='text-black'>stack web developer</span></h1>
                <p className='mt-6 text-xl font-bold'>Building Web Application with Front-end and Backend</p>
                <p className='mt-2 text-xl font-bold'>One years Experience</p>
                <div className='mt-8'>
                <button class="btn btn-outline btn-success mr-20">Get Resume</button>
                <button class="btn btn-outline btn-info">Hire me!</button>
                </div>
            </div>

            <div>
                <img src='https://img.freepik.com/free-vector/design-studio-concept-web-banner-woman-man-designers-team-create-website-layout_9209-7374.jpg?w=2000'></img>
            </div>
        </div>
    );
};

export default Banner;