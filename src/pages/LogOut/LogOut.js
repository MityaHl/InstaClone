import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";

class Login extends Component {

constructor(props) {
  super(props);
}

componentWillMount() {
    this.props.onAuth();
}

render() {
    if(!this.props.state.isAuth) {
            return(
                <div></div>
            )
        }

    return (
        <div >

        </div>
    );
}

}

export default connect( 
  state => ({
    state: state
  }),
  dispatch => ({
    onAuth: () => {
        dispatch( {type: 'CHANGE_IS_AUTH', payload: false } )
      }
  })
)(Login)

