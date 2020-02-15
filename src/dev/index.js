import React, { Component } from 'react';
import LeftSidebar from './leftSidebar';
import Navbar from './navbar';
import RightSidebar from './rightSidebar';
import Articals from './articals'
const Index =()=> {	
		return (
			<div className="dev">
			<Navbar />
			<div className="dev__wrapper">
			<div className="container">
             <LeftSidebar />
             <Articals />
             <RightSidebar />
             </div>
			</div>
			</div>
		);
	
}
export default Index;
