import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import UsersListContainer from './UsersList/UsersListContainer';
import PostsListContainer from './PostsList/PostsListContainer';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import styles from './AdminListStyles';


const AdminList = () => {

    const [pageContent, setPageContent] = useState(false);

    return (
      <Container maxWidth="lg">
        <Paper className={ css(styles.paper) }>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
                variant="fullWidth"
            >
                <Tab 
                    label="Users" 
                    className={ pageContent ? (css(styles.tab)) : (css(styles.selectedTab)) }
                    onClick={() => {
                            setPageContent(false)
                        }
                    }
                />
                <Tab 
                    label="Posts" 
                    className={ !pageContent ? (css(styles.tab)) : (css(styles.selectedTab)) }
                    onClick={() => {
                            setPageContent(true)
                        }
                    }
                />
            </Tabs>
        </Paper>
        <Paper>
            {
                !pageContent ? (
                    <UsersListContainer/>
                ) : (
                    <PostsListContainer/>
                )
            }
        </Paper>
      </Container>   
    );
}

export default AdminList; 
