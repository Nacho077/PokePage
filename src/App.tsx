import React from 'react';
import Home from './components/pages/home/home'
import Footer from './components/modules/footer/footer'
import Opening from './components/pages/opening/opening'
import Pokedex from './components/pages/pokedex/pokedex'
import Pokemon from './components/pages/pokemon/pokemon'
import Types from './components/pages/types/types'
import Animes from './components/pages/animes/animes'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

const App: React.FC = ():JSX.Element => {
  return (
    <div className="App">
        <Route exact path="/" component={Opening}/>
        <Route exact path="/PokePage" render={() => <Redirect to="/"/>}/>
      <section className="container_page">
        <Switch>
            <Route path="/home" component={Home}/>
            <Route exact path="/types" component={Types}/>
            <Route exact path="/animes" component={Animes}/>
            <Route exact path="/pokedex" component={Pokedex}/>
            <Route path="/pokemon/:name" component={Pokemon}/>
            <Route path="/type/:type" render={(props) => <Types selected={props.match.params.type}/>}/>
            <Route path="/pokedex/:zone" render={(props) => <Pokedex zone={props.match.params.zone}/>}/>
        </Switch>
      </section>
      <section className="footer">
        <Route path="/:page" component={Footer}/>
      </section>
    </div>
  );
}

export default App;
