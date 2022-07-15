import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './Componets/Navbar/Navbar';
import Banner from './Componets/Banner/Banner';
import About from './Componets/About/About';
import Projects from './Componets/Projects/Projects';
import Contact from './Componets/Contact/Contact';
import Footer from './Componets/Footer/Footer';


function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Banner></Banner>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    
    </div>
  );
}

export default App;
