import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Opening from './components/pages/opening/opening'
import Footer from './components/modules/footer/footer'
import Home from './components/pages/home/home'
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="navbar">
        <Route exact path="/" component={Opening}/>
        <Route exact path="/PokePage" render={() => <Redirect to="/"/>}/>
      </section>
      <section className="container_page">
        <Switch>
            <Route path="/home" component={Home}/>
        </Switch>
      </section>
      <section className="footer">
        <Route path="/:page" component={Footer}/>
      </section>
    </div>
  );
}

export default App;
