import React, {Component} from 'react';
import './default.scss';
import {auth} from './firebase/utils';
//import Header from './components/header'

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

import {Switch, Route} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';


const initialState = {
  currentUser : null
};

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       ...initialState
    };
  }
/*
  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if (!userAuth) return;

      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount() {
    this.authListener();
  }
  */
  render(){
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
            <Route path='/login' render = {() => (
                <MainLayout>
                  <Login />
                </MainLayout>
                )} /> 
          </Switch>    
      </div>
    );
  }
  
}

export default App;
