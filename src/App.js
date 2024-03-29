import React, {Component} from 'react';
import './default.scss';
import {auth, handleUserProfile} from './firebase/utils';
//import Header from './components/header'

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery'

import {Switch, Route, Redirect} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';

//no user default
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

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){ //i.e if user
          const userRef = await handleUserProfile(userAuth); //calling the function
          userRef.onSnapshot(snapshot => { //updating the local state of application with snapshot
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data() //all the data like email,etc that we stored 
              }
            })
          })
        }
      //if there is no user
      this.setState({
        ...initialState
      })
    })
  }

  componentWillUnmount() { //to avoid memory leakage
    this.authListener();
  }
  
  render(){
    const {currentUser} = this.state; /* to maintain user state in each page */

    return (
      <div className="App">
  
          
          <Switch>
            <Route exact path = '/' render = {() => (
              <MainLayout currentUser = {currentUser}>
                <Homepage />
              </MainLayout>
              )} />
            <Route path='/registration' render = {() => currentUser ? <Redirect to = './' />:(
              <MainLayout currentUser = {currentUser}>
                <Registration />
              </MainLayout>
              )} /> 
            <Route path='/login' render = {() => currentUser ? <Redirect to = './' />:(
                <MainLayout currentUser = {currentUser}>
                  <Login />
                </MainLayout>
                )} /> 
            <Route path='/recovery' render = { () => 
                (
                  <MainLayout >
                    <Recovery />
                  </MainLayout>
                )} />
          </Switch>    
      </div>
    );
  }
  
}

export default App;
