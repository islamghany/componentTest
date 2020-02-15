import React from 'react';
import ReactDom from 'react-dom';
import Wrapper from './component2/wrapper';
import './assets/style/style.scss';
import {BrowserRouter as Router } from 'react-router-dom';
import history from './history';

ReactDom.render(<Router history={history}> <Wrapper /></Router> , document.querySelector('#root'));