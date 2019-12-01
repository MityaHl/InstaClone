import React  from 'react';
import { useSelector } from 'react-redux'; 
import HeaderContainer from './pages/PublicPage/Header/HeaderContainer'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import PostsContainer from './pages/PublicPage/Posts/PostsContainer'
import ProfileContainer from './pages/PublicPage/Profile/ProfileContainer'
import OnePostContainer from './pages/PublicPage/Posts/OnePost/OnePost';
import LoginContainer from './pages/LoginPage/Login/LoginContainer';
import LogOut from './pages/LogOut/LogOut';
import Signin from './pages/SigninPage/Signin/Signin';
import './App.css';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import AdminListContainer from './pages/AdminPage/AdminList/AdminListContainer';
        

const App = () =>  {

    const isAuth  = useSelector(state => state.authUser); 

    return (
      <div className="App">
        <BrowserRouter>
        <HeaderContainer/>
        <Container>
          <Switch>
          {        
            !isAuth.login ? (
            <div>           
                    <Route path={'/login'} component={ LoginContainer }/>
                    <Route path={'/signin'} component={ Signin }/>
                    <Redirect to={'/login'} /> 
            </div>
            ) : (         
              <div>
                  <Route path={'/admin'} component={ AdminListContainer }/>
                  <Route path={'/profile'} component={ ProfileContainer }/>
                  <Route path={'/post/:id'} component={ OnePostContainer }/>
                  <Route path={'/login'} component={ LoginContainer }/>
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
