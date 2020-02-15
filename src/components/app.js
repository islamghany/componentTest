import React,{Suspense, lazy} from 'react';
import Menu from './menu';
import Loading from '../auxa/loading'
import Index from '../dev/index';
import  Icons from './Icons';
import Posts from './posts'
import {BrowserRouter as Router , Redirect , Route,Switch} from 'react-router-dom';
import Fetch from './fetch';
import VirtualList from './virtualizeList';
import Infinity from './infinityScroll';
import history from '../history'
import Buttons from './buttons'
import Forms from './forms'
import Wrapper from '../component2/wrapper';

 const App =(props)=>{
  console.log(props)
	return <div className="main">	
     <Redirect from='/' to='/components/icons' />
     <Switch>
     <Route exact path="/components/buttons" component={Buttons} />
     <Route exact path="/components/forms" component={Forms} />
	<Route exact path="/react/lazyload-image" component={Fetch}/>
     <Route exact path="/react/load-more" component={Posts} /> 
     <Route exact path="/react/react-window" component={VirtualList}/>  
     <Route exact path="/react/infinity-scroll" component={Infinity} />  
     <Route exact path="/dev" component={Index}  /> 
     <Route exact path="/components/icons" component={Icons} />  
     </Switch>
	</div>
}
export default App;