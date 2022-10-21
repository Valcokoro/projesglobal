import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/componentstyle/Navbar.css';



const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
   return (
       <nav className="navbar">
           
           <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
               onClick = {() => setIsMobile(false)}
           >
               <Link to='/' className='home'>
                   <li>Home</li>
               </Link>
               <Link to='/groceries' className='groceries'>
                   <li>Groceries</li>
                   <button className='grocery-btn'>
                       <select className='grocery-select'></select>
                    </button>
               </Link>
               <Link to='/foods' className='foods'>
                   <li>World Foods</li>
                   <button className='foods-btn'>
                       <select className='foods-select'></select>
                    </button>
               </Link>
               <Link to='/households' className='households'>
                   <li>Health, Beauty and Household</li>
                   <button className='households-btn'>
                       <select className='households-select'></select>
                    </button>
               </Link>
               <Link to='/recipes' className='recipes'>
                   <li>Recipes</li>
                   <button className='recipes-btn'>
                       <select className='recipes-select'></select>
                    </button>
               </Link>
               <Link to='/foodblog' className='food-blog'>
                   <li>Food Blog</li>
               </Link>
               <Link to='/stores' className='stores'>
                   <li>Our Stores</li>
               </Link>
               <Link to='/contact' className='contact-us'>
                   <li>Contact Us</li>
               </Link>
               
           </ul>
           <button className='phone-menu-icon'
              onClick={ () => setIsMobile(!isMobile)} >
               {isMobile ? (
               <i className="times icon"></i> 
               )
               : (<i className="bars icon"></i>)}
           </button>
       </nav>
   )
}


export default Navbar;