import React  from 'react';
import { useSelector } from 'react-redux'; 
import HeaderContainer from './pages/PublicPage/Header/HeaderContainer'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import PostsContainer from './pages/PublicPage/Posts/PostsContainer'
import Profile from './pages/PublicPage/Profile/Profile'
import OnePost from './pages/PublicPage/Posts/OnePost/OnePost';
import Login from './pages/LoginPage/Login/Login';
import LogOut from './pages/LogOut/LogOut';
import Signin from './pages/SigninPage/Signin/Signin';
import './App.css';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import AdminList from './pages/AdminPage/AdminList/AdminList';
        

const App = () =>  {

    const isAuth  = useSelector(state => state.mainValues.isAuth); 

    return (
      <div className="App">
        <BrowserRouter>
        <HeaderContainer/>
        <Container>
          <Switch>
          {        
            !isAuth ? ( 
            <div>           
                    <Route path={'/login'} component={ Login }/>
                    <Route path={'/signin'} component={ Signin }/>
                    <Redirect to={'/login'} /> 
            </div>
            ) : (         
              <div>
                  <Route path={'/admin'} component={ AdminList }/>
                  <Route path={'/profile'} component={ Profile }/>
                  <Route path={'/post/:id'} component={ OnePost }/>
                  <Route path={'/login'} component={ Login }/>
                  <Route path={'/signin'} component={ Signin }/>
                  <Route path={'/logout'} component={ LogOut }/>
                  <Route path={'/'} exact component={ PostsContainer }/>
                  <Redirect to={'/admin'} /> 
              </div> 
            )
            }         
            </Switch>
          </Container>
          
        </BrowserRouter>
      </div>
    )
}

export default App;
