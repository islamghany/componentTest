import React,{useState,useRef,useCallback} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetch from '../auxa/useFetch';
import Loading from '../auxa/loading';

const cardItem =(item)=>{
   return <div key={item.id}>
       <div className="card" >
       <div className="card__title">
        {item.title} 
       </div>
       <div className="card__body">
        {item.body} 
       </div>
      <button className="btn btn--contained1-argon mg-lf-0">show post</button>
   </div>
         
       </div>
  }

const Render =({posts})=>{
       const [list,setList]=useState(posts.slice(0,10));
       const [more,setMore]=useState(true);
       const counter = useRef(10);
       const fetchMoreData = useCallback(() => {
       const len = posts.length - counter.current - 10;
       if(len + 10 > 0){
        setTimeout(() => {
         setList( prevList =>posts.slice(0 ,  prevList.length + 10)) 
         },1000);
       }
       else if(len + 10 > 0){
         setTimeout(() => {
         setList( prevList =>posts.slice(0 , prevList.length + (len+10)));
         },1000);
       }
       else{
         setMore(false); 
       }
       counter.current+=10;
      },[setMore,setList]);
         
  return (
      <div>
        <h1 style={{ textAlign: "center" }}>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={list.length}
          next={fetchMoreData}
          hasMore={more}
          loader={<Loading />}
         endMessage={
            <p style={{ textAlign: "center",fontSize:'2rem' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          >
          {list.map((i, index) => (
            cardItem(i)
          ))}
        </InfiniteScroll>
      </div>
    );
}

const Infinite =(props)=> {
  const res = useFetch('/posts');
  console.log(props.location);
  if(res.response){
    return (
      <div>
       <Render posts={res.response.data} />
      </div>
    );
  }
  return <Loading />
  }

export default Infinite;