import React, { Component } from 'react';

const LeftSidebar =()=> {
	
		return (
			<div className="left-sidebar">
             <div className="left-sidebar__user">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" className="left-sidebar__user--img" alt="aa"/> 
              <div className="left-sidebar__user--info">
                <h1>islam mostafa</h1>
                <p>@islamghany</p>
               </div>
             </div>   
			<div className="left-sidebar__navigations">
             <h3>#navigations</h3>
			</div>
			</div>
		);
	
}
export default LeftSidebar;
