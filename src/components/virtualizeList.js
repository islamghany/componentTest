import React,{useEffect,useCallback,useRef,Suspense, lazy , useState} from 'react';
import useFetch from '../auxa/useFetch'; 
import Loading from '../auxa/loading';
//import {FixedSizeList as List} from 'react-window';
import {AutoSizer} from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import { FixedSizeList as List } from 'react-window';

const Row =(e)=>{
 return <div style={e.style}>row {e.index}</div>
}
// const CardItems =({items})=>{
//   console.log('render')
//   return items.map(item=>{
//     return renderItem(item)
//   })
// }
// const renderItem =(item)=>{

//   return <div key={item.id * Math.random()}>
//       <Slide bottom>
//       <div className="card" >
//       <div className="card__title">
//        {item.title} 
//       </div>
//       <div className="card__body">
//        {item.body} 
//       </div>
//       <button className="btn btn--contained-link mg-lf-0">show post</button>
//   </div>
//       </Slide>
//       </div>
// }
const VirtualList = ()=>{
	const [loading,setLoading] = useState();
	const res = useFetch('/posts');
	const items= useRef([])
  const cardItem =({index,style})=>{
   return <div key={index} style={style}>
       <div className="card" >
       <div className="card__title">
        {res.response.data[index].title} 
       </div>
       <div className="card__body">
        {res.response.data[index].body} 
       </div>
       <button className="btn btn--contained-link mg-lf-0">show post</button>
   </div>
       </div>
  }
    if(!res.response)
    	return <Loading />
    else if(res.error) return <div>{res.error}</div>
	return <div className="ss" style={{width:'100%' , minHeight:'100vh'}}> 
    <AutoSizer>
    {({height, width}) => (
     <List
      className="List"
      height={height}
      itemCount={res.response.data.length}
      itemSize={300}
      width={width}
      itemData={res.response.data}
    >
    {cardItem}
    </List>
    )}
  </AutoSizer>
  </div>
}

function rowRenderer({key, index, style}) {
  return (
    <div key={key} style={style}>
      row {index}
    </div>
  );
}

export default VirtualList