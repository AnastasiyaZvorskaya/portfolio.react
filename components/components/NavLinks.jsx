import React from 'react';
import '../components/style.css';
import { NavLink } from 'react-router-dom';



const Nav_Link = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "About me", to: "/about" },
    { id: 2, name: "Skills", to: "/skills" },
    { id: 2, name: "Portfolio", to: "/portfolio" },
    { id: 2, name: "Contacts", to: "/contacts" },
]


const NavLinks = () => {

    return (<>
       
            <ul className='navBar'>
                {Nav_Link.map((item) => {
                        return (<li key={item.id} className="link_navBar">
                            <NavLink to={item.to} className="link_navBar">{item.name}</NavLink>
                        </li>

                        )
                }

                )
                }

            </ul>
            <hr></hr>
           </>

    )

}

export default NavLinks;