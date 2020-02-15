import React,{useEffect,useRef,useState} from 'react';
import {Friends,Home_3,Heart,Atom} from '../assets/icons/icons';
import history from "../history";
import {NavLink} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const active={
   background:"#3358f4",
   transform: "translateY(-10px)"
}
const Sidebar = ()=>{
	const [react,setReact]=useState(false);
    const [components,setComponents]=useState(false);

     useEffect(()=>{
      history.location.pathname.includes('react') ? setReact(true) : setReact(false);
      history.location.pathname.includes('components') ? setComponents(true) : setComponents(false);
   },[history.location.pathname]);

	return <div className="sidebar">
        <a href="https://github.com/islamghany" target="_blank">
        <div className="sidebar__user">
         <img src="https://avatars2.githubusercontent.com/u/46031638?s=460&v=4" alt="islam"/>
         <div className="sidebar__user--info">
           <h2 className="sidebar__user--name">Islam Mostafa</h2>
           <p className="sidebar__user--id">@islamghany</p>
         </div>
        </div>
        </a> 
        <div className="sidebar__menu">
         <ul className="sidebar__list">
           <li className="sidebar__item">
            <div className="sidebar__item--row" style={{color: components ? '#fff':'#9a9a9a'   }} 
            onClick={()=>setComponents(e=>!e)}>
             <span className="icon" style={components ? active : null} >
              <Home_3 width="3rem" height="3rem" fill={components ? "#fff" : "#9a9a9a"} /> 
            </span>
            Components
            </div>
            
                              <Fade top cascade collapse  when={components}>

<ul className="sidebar__sub">
             <li><NavLink to="/components/icons" activeClassName="link">Icons</NavLink></li>
              <li><NavLink to="/components/buttons" activeClassName="link">Buttons</NavLink></li>
               <li><NavLink to="/components/forms" activeClassName="link">Forms</NavLink></li>
            </ul> </Fade>
           </li>
           <li className="sidebar__item">
           <div className="sidebar__item--row" 
            style={{color: react ? '#fff':'#9a9a9a' }} 
            onClick={()=>setReact(e=>!e)}>
             <span className="icon" style={react ? active : null} >
              <Atom width="3rem" height="3rem"  fill={react ? "#fff" : "#9a9a9a"} /> 
            </span>
            React Features
             </div>
              <Fade top cascade collapse  when={react}>
              <ul className="sidebar__sub">
              <li><NavLink to="/react/load-more" activeClassName="link">Load More</NavLink></li>
              <li><NavLink to="/react/lazyload-image" activeClassName="link">lazyload image</NavLink></li>
               <li><NavLink to="/react/react-window" activeClassName="link">react window</NavLink></li>
               <li><NavLink to="/react/infinity-scroll" activeClassName="link">infinity scroll</NavLink></li>
            </ul>
            </Fade>
           </li>
         </ul>  
        </div>
	</div>
 }
 export default Sidebar
