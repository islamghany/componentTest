import React from 'react';
import Slide from 'react-reveal/Slide'
const CardItems =React.memo(({items})=>{
	console.log('render')
	return items.map(item=>{
		return renderItem(item)
	})
})
const renderItem =(item)=>{

	return <div key={item.id * Math.random()}>
      <Slide bottom>
      <div className="card" >
      <div className="card__title">
       {item.title} 
      </div>
      <div className="card__body">
       {item.body} 
      </div>
      <button className="btn btn--contained1-argon mg-lf-0">show post</button>
	</div>
      </Slide>
      </div>
}
export default CardItems;