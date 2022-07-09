import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './Componets/Home/Navbar';
import Banner from './Componets/Home/Banner';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Banner></Banner>
    </div>
  );
}

export default App;
