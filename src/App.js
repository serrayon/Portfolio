import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import Resume from './components/Resume/Resume';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ Landing }/>
        <Route path='/resume' component={ Resume }/>
      </Switch>
    </>
  )
}

export default App;
