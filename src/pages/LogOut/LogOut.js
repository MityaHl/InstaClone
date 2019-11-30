import React, { Component } from 'react';
import { connect } from 'react-redux';


class Login extends Component {

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
        <div/>
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

