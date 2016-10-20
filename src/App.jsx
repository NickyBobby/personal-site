import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { listenToAuth } from './actions/auth';
import { listenToProjects } from './actions/projects';

import { Router, Route, browserHistory } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Main from './components/Main';
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

export class App extends Component {

  componentWillMount() {
    store.dispatch(listenToAuth());
    store.dispatch(listenToProjects());
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio} data={data}/>
            <Route path="/blog" component={Blog}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}
