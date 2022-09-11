import React from 'react';
import '../components/style.css';
import Image from "../components/Image"
import Button from './Button';
import { NavLink } from 'react-router-dom';





const Footer = () => {

    return (<div className='footer'>
        <p className='footer_contact'>Contacts</p>
        <p className='foofer_text'>Want to know more or just chat? <br></br>
            You are welcome!</p>
<Button/>
<div className='network_img'>
    <a href='https://www.linkedin.com/in/anastasiya-z-825230230/'><Image src={require('../Image/In.png')} /></a>
    <a href='https://www.instagram.com/anastasiiazvorskaya/'><Image src={require('../Image/insta.png')} /></a>
    <a href='https://github.com/AnastasiyaZvorskaya'><Image src={require('../Image/git.PNG')} /></a>
    <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'><Image src={require('../Image/mail.png')} /></a>
</div>
<p className='footer_network'>Like me on <br></br>
LinkedIn, Instagram, GitHub, Gmail</p>

    </div>

    )

}

export default Footer;
