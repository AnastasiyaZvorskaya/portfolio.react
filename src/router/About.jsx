import React from 'react';
import { NavLink } from 'react-router-dom';
import NavLinks from '../components/NavLinks';


const About = () => {
  return <div>
    <NavLinks />{/* навигационное меню */}
    <div className='about'> {/* открывающий див */}
      <h2 className='about_name'>About me</h2>
      <p className='about_text'>Hi, I'm Anastasia, a front-end developer from Krivoy Rog. I am interested in website development and everything connected with it.</p>
      <p className='about_text'>I am a student of "Frond-end developer" courses at IT-Academy.</p>
      <p className='about_text'>Ready for great projects with wonderful people.</p>
    </div>
  </div>;
}


export default About;