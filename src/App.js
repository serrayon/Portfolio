import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/Blog/Blog';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ Landing }/>
        <Route path='/blog' component={ Blog }/>
      </Switch>
    </>
  )
}

export default App;
