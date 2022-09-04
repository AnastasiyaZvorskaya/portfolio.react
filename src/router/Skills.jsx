import React from 'react';
import NavLinks from '../components/NavLinks';
import Image from "../components/Image"


const Skills = () => {
  return <div>
    <NavLinks />
    <div className='skills'><p className='skills'>Skills</p></div>
    <p className='skills_text'>I work in such programs as</p>
    <div className='skill'>
      <div className='skills_card'> {/* разбила на блоки и с помощью дисплей флекс спозиционировала */}
        <Image src={require('../Image/HTML.png')} />
        <p className='skills_name'>HTML</p>
        <div className='skill_star'>
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star1.png')} />
        </div>
      </div>{/* закрывающий див */}
      <div className='skills_card'> {/* разбила на блоки и с помощью дисплей флекс спозиционировала */}
        <Image src={require('../Image/CSS.png')} />
        <p className='skills_name'>CSS</p>
        <div className='skill_star'>
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star1.png')} />
        </div>
      </div>{/* закрывающий див */}
      <div className='skills_card'>{/* разбила на блоки и с помощью дисплей флекс спозиционировала */}
        <Image src={require('../Image/JS.png')} />
        <p className='skills_name'>JavaScript</p>
        <div className='skill_star'>
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star1.png')} />
        </div>
      </div>{/* закрывающий див */}
      <div className='skills_card'>{/* разбила на блоки и с помощью дисплей флекс спозиционировала */}
        <Image src={require('../Image/Reackt.png')} />
        <p className='skills_name'>Reackt</p>
        <div className='skill_star'>
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star1.png')} />
        </div>
      </div>{/* закрывающий див */}
      <div className='skills_card'>{/* разбила на блоки и с помощью дисплей флекс спозиционировала */}{/* разбила на блоки и с помощью дисплей флекс спозиционировала */}
        <Image src={require('../Image/Angular.png')} />
        <p className='skills_name'>Angular</p>
        <div className='skill_star'>
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star.png')} />
          <Image src={require('../Image/star1.png')} />
        </div>
      </div>{/* закрывающий див */}
    </div>


  </div>;
}


export default Skills;