import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './paginas/Home'
import Historia from './paginas/Historia'
import Sobre from './paginas/Sobre'
import Erro from './paginas/Erro'
import Footer from './components/Footer'


import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/historia' component={Historia} />
          <Route path='/erro' component={Erro} />
          
        </div>
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
