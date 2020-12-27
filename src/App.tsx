import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/pages/home/home'
import Navbar from './components/modules/navbar/navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/:page" component={Navbar} />
      <Switch>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
