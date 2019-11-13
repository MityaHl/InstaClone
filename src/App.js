import React, { Component } from 'react';
import Header from './components/Header/Header'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Posts from './components/Posts/Posts'
import Profile from './components/Profile/Profile'
import OnePost from './components/Posts/OnePost';
import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';
import './App.css';
import Container from '@material-ui/core/Container';

class App extends Component {

  constructor(props) {
    super(props);
    
  }

  render(){  
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Container>
            <Switch>            
              <Route path={'/profile'} component={ Profile }/>
              <Route path={'/post/:id'} component={ OnePost }/>
              <Route path={'/login'} component={ Login }/>
              <Route path={'/signin'} component={ Signin }/>
              <Route path={'/'} component={ Posts }/>
            </Switch>
          </Container>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App
