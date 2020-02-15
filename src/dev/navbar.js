import React, { Component } from 'react';
import {Bell , Friends , Menu_2} from '../assets/icons/icons'
const Navbar =()=> {	
		return (
			<nav className="nav">
			<nav className="nav__wrapper">
            <div className="nav__logo">
            <h3>Dev</h3>
            </div> 
            <div className="nav__search">
             <input type="text" className="nav__search--input" placeholder="Search"/>
            </div>
            <div className="nav__head">
            <button className="btn btn--contained-dark">new post</button>
            <Bell width="2.3rem" height="2.3rem" fill="#1a1a1a" />
            <Friends width="2.3rem" height="2.3rem" fill="#1a1a1a" />
            <img className="nav__head--image" src="https://randomuser.me/api/portraits/men/1.jpg" />
            <Menu_2 width="2.3rem" height="2.3rem" fill="#1a1a1a" />            
            </div>
            </nav>
			</nav>
		);	
}
export default Navbar;
