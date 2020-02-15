import React,{useEffect,useCallback,useRef,Suspense, lazy , useState} from 'react';
import useFetch from '../auxa/useFetch'; 
import Loading from '../auxa/loading';
import CardItems from './cardItems';

const Posts = ()=>{
	const [loading,setLoading] = useState();
	const res = useFetch('/posts');
	const items= useRef([])
	const x =  res.response && res.response.data ? res.response.data.length : 0;
	const [total,setTotal]=useState(0);
    const loadMore=useCallback(()=>{
    	if(x){
    	setLoading(true);
    	setTimeout(()=>{
    		for(let i=total;i < x && i < total + 20 ;i++)items.current=[...items.current ,  res.response.data[i] ]    	
        setLoading(false)
        setTotal(items.current.length)
    	},500);
    }
    },[x]);

     useEffect(()=>{
      loadMore();
     },[x])
    // if(!res.response)
    // 	return <Loading />
    // else if(res.error) return <div>{res.error}</div>
	return <div>
		 <div className="card__container">
           <CardItems items={items.current} />
		 </div>
		<button className="btn btn--contained-default mg-lf-0 block" disabled={loading} onClick={()=>loadMore()}> {loading ? <Loading height='40rem' width="40rem" /> : "load more"}</button>
	</div>
}
export default Posts