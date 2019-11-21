import React, { Component } from 'react';
import Header from './pages/PublicPage/Header/Header'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Posts from './pages/PublicPage/Posts/Posts'
import Profile from './pages/PublicPage/Profile/Profile'
import OnePost from './pages/PublicPage/Posts/OnePost/OnePost';
import Login from './pages/LoginPage/Login/Login';
import LogOut from './pages/LogOut/LogOut';
import Signin from './pages/SigninPage/Signin/Signin';
import './App.css';
import Container from '@material-ui/core/Container';
import { syncHistoryWithStore } from 'react-router-redux';
import { connect } from 'react-redux';
import AdminHeader from './pages/AdminPage/AdminHeader/AdminHeader';

        

class App extends Component {

  render() {
    return (
      <div className="App">

        <BrowserRouter>
        <Header/>
         <Container>
          <Switch>
        {        
          !this.props.state.isAuth ? ( 
          <div>           
                  <Route path={'/login'} component={ Login }/>
                  <Route path={'/signin'} component={ Signin }/>
                  <Redirect to={'/login'} /> 
          </div>
          ) : (
                
          !this.props.state.isAdmin ? (
            <AdminHeader/>  
          ) : (          
            <div>
                <Route path={'/profile'} component={ Profile }/>
                <Route path={'/post/:id'} component={ OnePost }/>
                <Route path={'/login'} component={ Login }/>
                <Route path={'/signin'} component={ Signin }/>
                <Route path={'/logout'} component={ LogOut }/>
                <Route path={'/'} exact component={ Posts }/>
                <Redirect to={'/'} /> 
            </div>
                  
          )
              )
          }         
          </Switch>
          </Container>
          
        </BrowserRouter>
      </div>
    )
  }
}

export default connect( 
  state => ({
    state: state
  }),
  dispatch => ({
    onLogOut: () => {
      dispatch( {
        type: 'LOGOUT', payload: false
      } )
    }
  })
)(App)
