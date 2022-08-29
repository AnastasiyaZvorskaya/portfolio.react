import React from 'react';
import NavLinks from '../components/NavLinks';
import '../components/style.css';
import Image from "../components/Image"
import Button from '../components/Button';


const Home = () => {



  return <div className='home'>
    <NavLinks /> {/* навигационное меню */}
    <hr></hr>
    <div className='text'>
      <p className='text_name'>Anastasiya <br></br>Zvorska</p>
      <p className='text_skill'>front-end developer <br></br>31 years old, Ukraine</p>
      <p className='text_language'>RU | UKR | PL | ENG</p>
    </div>
    <div className="photo">{/* открывающий див  для мерцания звезд + фото*/}
       <div className="star star1"></div>
       <div className="star star2"></div>
       <div className="star star3"></div>
       <div className="star star4"></div>
       <div className="star star5"></div>
       <div className="star star6"></div>
       <div className="star star7"></div>
      <h2 className='text_my_photo'>Welcome <br></br>aboard</h2>
      <Image src={require('../Image/IMG_1108.PNG')} />
    </div>{/* закрівающий див */}
  </div>;
}


export default Home;