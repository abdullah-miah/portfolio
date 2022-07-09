import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './Componets/Home/Navbar';
import Banner from './Componets/Home/Banner';
import About from './Componets/Home/About';
import Projects from './Componets/projects/Projects';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Banner></Banner>
     <About></About>
     <Projects></Projects>
    </div>
  );
}

export default App;
