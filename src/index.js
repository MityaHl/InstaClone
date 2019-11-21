import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  { createStore, applyMiddleware } from 'redux';
import 'react-widgets/dist/css/react-widgets.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import reducer from './store/redusers';
import thunk from 'redux-thunk';
 

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
        <Provider store={store}>     
                <App /> 
        </Provider> 
, document.getElementById('root'));
