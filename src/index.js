import React from 'react';
import { render } from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import App from './components/app.component.jsx';
import About from './components/about.component.jsx';
import Portfolio from './components/portfolio.component.jsx';
import Blog from './components/blog.component.jsx';
import Main from './components/main.component.jsx';
import './index.css';

const data = [
    {
        id: 1,
        name: 'Cannonz',
        github: 'https://github.com/NickyBobby/game-time',
        production: 'http://tman22.github.io/game-time/',
        technologies: 'JavaScript HTML Canvas',
        media: './assets/cannonz.jpg',
        description: 'Team project building a game in JavaScript using webpack and HTML Canvas'

    },
    {
        id: 2,
        name: 'Cannonz',
        github: 'https://github.com/NickyBobby/game-time',
        production: 'http://tman22.github.io/game-time/',
        technologies: 'JavaScript HTML Canvas',
        media: './assets/cannonz.jpg',
        description: 'Team project building a game in JavaScript using webpack and HTML Canvas'

    },
    {
        id: 3,
        name: 'Cannonz',
        github: 'https://github.com/NickyBobby/game-time',
        production: 'http://tman22.github.io/game-time/',
        technologies: 'JavaScript HTML Canvas',
        media: './assets/cannonz.jpg',
        description: 'Team project building a game in JavaScript using webpack and HTML Canvas'

    },
    {
        id: 4,
        name: 'Cannonz',
        github: 'https://github.com/NickyBobby/game-time',
        production: 'http://tman22.github.io/game-time/',
        technologies: 'JavaScript HTML Canvas',
        media: './assets/cannonz.jpg',
        description: 'Team project building a game in JavaScript using webpack and HTML Canvas'

    },
    {
        id: 5,
        name: 'Cannonz',
        github: 'https://github.com/NickyBobby/game-time',
        production: 'http://tman22.github.io/game-time/',
        technologies: 'JavaScript HTML Canvas',
        media: './assets/cannonz.jpg',
        description: 'Team project building a game in JavaScript using webpack and HTML Canvas'

    },
    {
        id: 6,
        name: 'Cannonz',
        github: 'https://github.com/NickyBobby/game-time',
        production: 'http://tman22.github.io/game-time/',
        technologies: 'JavaScript HTML Canvas',
        media: './assets/cannonz.jpg',
        description: 'Team project building a game in JavaScript using webpack and HTML Canvas'

    },
    {
        id: 7,
        name: 'Cannonz',
        github: 'https://github.com/NickyBobby/game-time',
        production: 'http://tman22.github.io/game-time/',
        technologies: 'JavaScript HTML Canvas',
        media: './assets/cannonz.jpg',
        description: 'Team project building a game in JavaScript using webpack and HTML Canvas'

    }
];


render(
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio} data={data}/>
      <Route path="/blog" component={Blog}/>
    </Route>
  </Router>,
  document.getElementById('container')
);
