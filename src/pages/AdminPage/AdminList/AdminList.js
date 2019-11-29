import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import UsersList from './UsersList/UsersList';
import PostsList from './PostsList/PostsList';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import styles from './AdminListStyles';


class AdminList extends Component {

constructor(props) {
  super(props);
  this.state = {
      pageContent: false
  }
}


render() {
    return (
      <Container maxWidth="md">
        <Paper className={ css(styles.paper) }>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
                variant="fullWidth"
            >
                <Tab 
                selected
                    label="Users" 
                    className={ css(styles.tab) }
                    onClick={() => {
                        this.setState({
                            pageContent: false
                        })
                    }}
                />
                <Tab 
                    label="Posts" 
                    className={ css(styles.tab) }
                    onClick={() => {
                        this.setState({
                            pageContent: true
                        })
                    }}
                />
            </Tabs>
        </Paper>
        <Paper>
            {
                !this.state.pageContent ? (
                    <UsersList/>
                ) : (
                    <PostsList/>
                )
            }
        </Paper>
      </Container>
        
    );
}

}

export default connect( 
  state => ({
    state: state
  }),
  dispatch => ({

  })
)(AdminList); 
