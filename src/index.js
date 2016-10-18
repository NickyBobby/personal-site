import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Main from './components/Main';
import './index.css';

render(
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/blog" component={Blog}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
