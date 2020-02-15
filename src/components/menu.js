import React,{useEffect,useRef,useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Arrow_down2} from '../assets/icons/icons'

import history from "../history";

const Menu =()=>{
	 const el = useRef(null);
	 const el2 = useRef(null);
   const [react,setReact]=useState(false);
  const [components,setComponents]=useState(false);
   const [hidden,setHidden] = useState(false);
	 useEffect(()=>{
          window.addEventListener('click',onClickOutside);
          return ()=> window.removeEventListener('click',onClickOutside)
	 })
	 const handleClick = ()=>{
	 	if(hidden){
        el.current.classList.add('swing-out-left-bck');
	 	setTimeout(()=>setHidden(false),500);
	 	el2.current.classList.remove('move');
	 	
	 }
	 	else {
	 		setHidden(e=>!e);
	 		el2.current.classList.add('move');
	 	}
	 }

	 const onClickOutside=()=>{
	 	if(hidden){
        el.current.classList.add('swing-out-left-bck');
        el2.current.classList.remove('move');
	 	setTimeout(()=>setHidden(false),500);
	 }
	 }
   useEffect(()=>{
      history.location.pathname.includes('react') ? setReact(true) : setReact(false);
      history.location.pathname.includes('components') ? setComponents(true) : setComponents(false);
   },[history.location.pathname])

	return <div className="menu">
     <div className="menu__row"> 
     { hidden &&
      <div ref={el} className="menu__body tilt-in-left-1"  onClick={(e)=> e.stopPropagation()}>
      <ul className="menu__list">
       <li className="menu__item">
       <div className="menu__multi--row" style={{background: components ? '#393e46':'transparent'   }}  onClick={()=>setComponents(e=>!e)}>
      <button className="menu__multi--button" >    
       components 
      </button>
      <Arrow_down2 width="1.6rem" height="1.6rem"  transform={ components ?  'rotate(270)' : 'rotate(90)'}  />
      </div>
      </li>
      { components  ?
      (<ul className="menu__multi slide-in-top">
         <li className="menu__item">
        <NavLink  to="/components/buttons"
       activeClassName="active"
       onClick={handleClick}
        className="menu__link">
        Buttons
        </NavLink>
        </li>
         <li>
         <NavLink  to="/components/forms"
       activeClassName="active"
       onClick={handleClick}
       className="menu__link">
        forms
        </NavLink></li> 
        <li className="menu__item"><NavLink to="/components/icons" onClick={handleClick} 
       className="menu__link" activeClassName="active">
         icons
        </NavLink></li>
        </ul>):null
      }
      <li className="menu__item">
      <div className="menu__multi--row" style={{background: react ? '#393e46':'transparent'   }} 
       onClick={()=>setReact(e=>!e)}>
      <button className="menu__multi--button" >    
       React Features 
      </button>
      <Arrow_down2 width="1.6rem" height="1.6rem"  transform={ react ?  'rotate(270)' : 'rotate(90)'}  />
      </div>
      </li>
      { react ?
      (<ul className="menu__multi slide-in-top" >
         <li className="menu__item">
        <NavLink exact to="/react/load-more"
       activeClassName="active"
       onClick={handleClick}
        className="menu__link">
        Load More
        </NavLink></li>
       <li className="menu__item">
       <NavLink to="/react/lazyload-image"
        onClick={handleClick}
        className="menu__link"
        activeClassName="active">
         Lazyload</NavLink></li>
       <li className="menu__item">
       <NavLink to="/react/react-window" onClick={handleClick} className="menu__link" activeClassName="active">
         Virtualized List
        </NavLink></li> 
       <li className="menu__item"><NavLink to="/react/infinity-scroll" onClick={handleClick} 
       className="menu__link" activeClassName="active">
         infinity scroll
        </NavLink></li>
        </ul>):null
      }
        
         <li className="menu__item">
        <NavLink to="/dev" onClick={handleClick} 
       className="menu__link" activeClassName="active">
         dev.to
        </NavLink></li>
    </ul>
 
      </div>
  }<div className="menu__icon" ref={el2}  onClick={(e)=>{e.stopPropagation();handleClick()}}>
       <div className="one"></div>
       <div className="two"></div>
       <div className="three"></div>
      </div>
      
  </div>
	</div>
}
export default Menu;