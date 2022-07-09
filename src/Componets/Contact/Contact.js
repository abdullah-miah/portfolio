import React from 'react';

const Contact = () => {
    return (
        <div className='mt-20 mx-12'>
            <h1 className='text-center text-3xl font-bold'>Contact With Us</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-12 gap-4'>
         <div>
             <h1 className='text-2xl'>24/7 can be touch ME! Your touch within 1 hour I will feed back</h1>
             <p className='text-2xl'>Catch me Alwayes guyes. </p>
             <h3 className='text-2xl mt-6'>24/7 Availabel Me!</h3>
         </div>
         <div>
             <p className='text-xl mb-4'>Name</p>
             <input type="text" placeholder="Full name" class="input input-bordered w-full max-w-xs" />
             <form>

             </form>
         </div>


        </div>
        </div>
    );
};

export default Contact;