import React from 'react';
import NavLinks from '../components/NavLinks';
import '../components/style.css';



const Portfolio = () => {
  return <div>
 <NavLinks/>{/* навигационное меню */}
 <h2 className='portfolio_name'>Portfolio</h2>
 
 <div className='img'> {/* с помощью css задала background-image */}
 <div className='img_portfolio_one'><p className='portfolio_text'>HTML, CSS, JS</p></div>
 <div className='img_portfolio_two'><p className='portfolio_text'>JS, JSON, Ajax</p></div>

 </div> 
  <div className='img'> 
 <div className='img_portfolio_three'><p className='portfolio_text portfolio_text_small'>React</p></div>
 <div className='img_portfolio_four'><p className='portfolio_text portfolio_text_small'>React</p></div>

 </div> 

  </div>;
}


export default Portfolio;