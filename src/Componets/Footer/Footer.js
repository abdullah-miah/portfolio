import React from 'react';

const Footer = () => {
    return (
        <div >
            <footer class=" mt-12 footer footer-center p-10 bg-neutral text-neutral-content">
  <div>
  <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://i.ibb.co/kJx65bN/20220608-002132-3.jpg" />
  </div>
</div>
    <p class="font-bold">
      Ab.Web House. <br/> Web developer
    </p> 
    <p>Copyright © 2022 - All right reserved</p>
  </div> 
  <div>
    <div class="grid grid-flow-col gap-4">
      <a target='_blank' href='https://www.linkedin.com/in/abdullah-miah-06137b240/'>
        <img className='rounded' width="24" height="24" src='https://i.ibb.co/xjrj8TC/linkedin-svgrepo-com.jpg'></img>
        </a> 
      <a target='_blank' href='https://github.com/abdullah-miah'>
        <img className='rounded' width="24" height="24" src='https://i.ibb.co/kBP94ZC/icons8-github-48.png'></img>
        </a> 
      <a target='_blank' href='https://www.facebook.com/profile.php?id=100007757865241'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;