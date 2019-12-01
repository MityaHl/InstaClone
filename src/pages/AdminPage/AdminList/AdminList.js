import React, { useState } from 'react';
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
                            setPageContent(false)
                        }
                    }
                />
                <Tab 
                    label="Posts" 
                    className={ css(styles.tab) }
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
