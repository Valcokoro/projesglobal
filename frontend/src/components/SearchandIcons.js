import React from 'react';
import '../styles/componentstyle/SearchandIcons.css';
import cart from '../assets/cart.svg';



const SearchandIcons = () => {
    return (
        <div className='search-icons'>
             <img src={cart} className='cart-icon' alt='cart'/>
            <h1 className='company-name'>PROJESGLOBAL GROCERY STORE</h1>
            <form>
                <input
                 type='text'
                 placeholder='What are you looking for?'
                 className='search-bar'
                 >
                 </input>
                 <button className='search-btn'>
                     <i className="search icon" style={{color: "green"}}></i>
                 </button>
                 
            </form>
        </div>
    )
}



export default SearchandIcons;