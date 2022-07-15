import React from 'react';
import { Link,animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    return (
        <div className='text-white text-2xl'>
            <div class="navbar fixed bg-sky-400 border-b-2  border-indigo-900">
  <div class="navbar-start mx-12">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="  menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href='#'>Home</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Projects</a></li>
      <li><a href='#'>Contact</a></li>
      
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-3xl">Ab.Web</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0 text-xl">
      <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
      <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
      <li><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
      <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;