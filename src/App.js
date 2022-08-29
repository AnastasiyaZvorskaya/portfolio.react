import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import About from './router/About';
import Contacts from './router/Contacts';
import Home from './router/Home';
import Portfolio from './router/Portfolio';
import Skills from './router/Skills';



function App() {
  return (
    <div className='wrapper'>
     <BrowserRouter>
          <Routes >
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contacts" element={<Contacts/>} />
           </Routes>   
            <Footer/>
    </BrowserRouter> 
    
    </div>
  );
}

export default App;

