import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import HomePage from './components/home/HomePage.js';
import AboutPage from './components/about/AboutPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
