import React from 'react';
import './App.css';
import Home from './pages/Home/'
import SearchResults from './pages/SearchResults/'
import Details from './pages/Details'
import StaticContext from './Context/StaticContext'
import{ GifsContextProvider} from './Context/GiftContext'

import {Link,Route} from 'wouter';

export default function App() {
 
  return (
    <StaticContext.Provider value={{  name: 'midudev',
                                    suscribeteAlCanal:true}}>
      <div className="App">
        <section className="App-content">
        <Link to= '/'>
          <figure className="App-logo">
            <img alt='Giffy logo' src='/logo.png'/>
          </figure>
        </Link>
        <GifsContextProvider>
        <Route 
          component = {Home}
          path = '/'/>
         
          <Route 
            component ={Details}
            path='/gif/:id'
          />
        <Route 
          component = {SearchResults}
          path = '/search/:keyword'/> 
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}


