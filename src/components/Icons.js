import React,{useState,useRef,useEffect} from 'react';
import * as Vectors from '../assets/icons/icons';
import {Search} from '../assets/icons/icons';

const Icons =()=> {
  const inputRef=useRef(null);
  const [keyword,setKeyword]= useState('');
  const [searchedIcons,setSearchedIcons]=useState([])
  const [icons,setIcons]= useState([...Object.keys(Vectors).map(key=>{return {name:key,svg:Vectors[key]}})]); 
useEffect(()=>{
setIcons(X=>X.sort((a, b) => {
            let textA = a.name.toUpperCase();
            let textB = b.name.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
          }));
    setSearchedIcons(searchedIcons);
},[])
useEffect(()=>{
    const timer = setTimeout(()=>{
       if(keyword === inputRef.current.value){
           setSearchedIcons(icons.filter(item=>item.name.toUpperCase().includes(keyword.toUpperCase()) ))      
       }
     },400)

       return ()=>clearTimeout(timer);
},[keyword])
		return (
			<div className="icons">
             <div className="icons__wrapper">	
             <div className="icons__search">
 <div className="form__unit">
           <input type="text" id="iconed" ref={inputRef} value={keyword}
            onChange={(e)=>setKeyword(e.target.value)} className="form__input iconed"/>
           <span className="form__icon"><Search  /></span>
         </div>             </div>

               <div className="icons__svg">
                {searchedIcons.map(item=><div className="icons__svg--icon">
                	{item.svg()}
                     <h1>{item.name}</h1>  
                	</div>) }
               </div>
             </div>
			</div>
		);
}
export default Icons
