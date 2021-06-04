import React from 'react';
import './default.scss';

//import Header from './components/header'

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

import {Switch, Route} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">

        
        <Switch>
          <Route exact path = '/' render = {() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
            )} />
          <Route path='/registration' render = {() => (
            <MainLayout>
              <Registration />
            </MainLayout>
            )} /> 
        </Switch>
        
      
      
    </div>
  );
}

export default App;
