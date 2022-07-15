import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a32as2l', 'template_zkqykri', e.target, '6yZP6YEl4-kTZ3vo-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <div id='contact' className='mt-20 mx-12'>
            <div
            data-aos="zoom-in-down"  
            data-aos-delay="50"
            ata-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
            >
            <h1 className='text-center text-3xl font-bold'>Contact With Us</h1>
            </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-12 gap-4'>
         <div className=' border-r-2 border-indigo-600'>
             <h1 className='text-2xl'>24/7 can be touch ME! Your touch within 1 hour I will feed back</h1>
             <p className='text-2xl'>Catch me Alwayes guyes. </p>
             <h3 className='text-2xl mt-6'>24/7 Availabel Me!</h3>
               
         </div>
         <div 
         data-aos="fade-left"  
         data-aos-delay="50"
         ata-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
         data-aos-once="false"
         
         className='lg:mx-12'>
             <form onSubmit={sendEmail}>
             <p className='text-xl mb-4'>Name</p>
             <input name='name' required type="text" placeholder="Full name" class="input input-bordered w-full max-w-xs" />
             <p className='text-xl my-4'>Email</p>
             <input name='email' required type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
             <br></br>
             <textarea name='meassage' required rows="4" cols="50" class="textarea textarea-bordered  my-6" placeholder="Write something..."></textarea>
             <br/>
             <input className='btn btn-primary' type='submit' value='Send meassage'></input>
             </form>
         </div>


        </div>
        </div>
    );
};

export default Contact;