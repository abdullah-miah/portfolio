import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './Componets/Home/Navbar';
import Banner from './Componets/Home/Banner';
import About from './Componets/Home/About';
import Projects from './Componets/projects/Projects';
import Contact from './Componets/Contact/Contact';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Banner></Banner>
     <About></About>
     <Projects></Projects>
     <Contact></Contact>
    </div>
  );
}

export default App;
