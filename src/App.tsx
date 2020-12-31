import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Opening from './components/pages/opening/opening'
import Footer from './components/modules/footer/footer'
import Home from './components/pages/home/home'
import Pokedex from './components/pages/pokedex/pokedex'
import './App.css';

const App: React.FC = ():JSX.Element => {
  return (
    <div className="App">
        <Route exact path="/" component={Opening}/>
        <Route exact path="/PokePage" render={() => <Redirect to="/"/>}/>
      <section className="container_page">
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/pokedex" component={Pokedex}/>
        </Switch>
      </section>
      <section className="footer">
        <Route path="/:page" component={Footer}/>
      </section>
    </div>
  );
}

export default App;
