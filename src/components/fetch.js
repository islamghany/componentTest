import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom'
import LazyLoad from 'react-lazyload';

const Fetch = React.memo(()=>{
    const inputRef = useRef(null);
	const [data,setData]= useState([]);
	const fetchData= async (term)=>{
			try{
			const res= await axios.get('https://api.unsplash.com/photos',{
				params:{
					query:term
				},
				headers:{
                  Authorization:'Client-ID 47d20c4f8cff22fc814534bbc702c873d98fa3305dfa1bba74e5f1e0a480b08c'
				}
			});
			setData(res.data)
		}catch(err){
			console.log(err);
		}
		}
	useEffect(()=>{	
		document.title="fetch app"
		fetchData();
	},[]);
  return <div>
    <div>
    <form onSubmit={e=>{
    	e.preventDefault(inputRef.current.value);
    	console.log(inputRef.current.value)
    	fetchData(inputRef.current.value)}}>
    <input className="input-search" ref={inputRef} type="text" placeholder="Search Photos" />
    </form></div>
  <div className="img__wrapper">
      {data && data.slice(0,50).map(item=>{
      	return <div className="img" key={item.id}>
      	   <LazyLoad offset={200}>           
            <Zoom>
            <img src={item.urls.full}/>
            </Zoom>
            </LazyLoad>
      	</div>
      })}
  </div>
  </div>
});


export default Fetch;