import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/pages/home/home'
import Navbar from './components/modules/navbar/navbar'
import Footer from './components/modules/footer/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/:page" component={Navbar}/>
      <Route exact path="/" component={Home}/>
      <Switch>
      </Switch>
      <Route path="/:page" component={Footer}/>
    </div>
  );
}

export default App;
