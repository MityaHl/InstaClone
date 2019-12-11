import React, { useEffect }  from 'react';
import Axios from 'axios';
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
import AdminListContainer from './pages/AdminPage/AdminList/AdminListContainer';
import { queryPosts } from './store/actions/posts';


const App = () =>  {

  useEffect(
     () => {
      Axios
        .get('http://localhost:8000/posts')
        .then(response => {
           queryPosts(response.data);
        })
      }, []
    );

    const isAuth  = useSelector(state => state.authUser.login); 
    const isAdmin  = useSelector(state => state.authUser.admin);
  console.log(isAdmin);
    return (
      <div className="App">
        <BrowserRouter>
        <HeaderContainer/>
        <Container>
          <Switch>
          {        
            
            !isAuth ? (
            <div>           
                    <Route path={'/login'} component={ LoginContainer }/>
                    <Route path={'/signin'} component={ Signin }/>
                    <Redirect to={'/login'} /> 
            </div>
            ) : (         
              <div>
                {
                  isAdmin ? (
                    <div>
                      <Route path={'/admin'} exact component={ AdminListContainer }/>
                      <Route path={'/logout'} exact component={ LogOut }/>
                      <Redirect to={'/admin'} />
                    </div> 
                  ) : (
                    <div>
                      <Route path={'/profile'} exact component={ ProfileContainer }/>
                      <Route path={'/post/:id'} exact component={ OnePostContainer }/>
                      <Route path={'/logout'} exact component={ LogOut }/>
                      <Route path={'/'} exact component={ PostsContainer }/>
                      <Redirect to={'/'} />
                    </div>
                  )
                }
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
