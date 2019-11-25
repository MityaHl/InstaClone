import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { css } from 'aphrodite';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from './UsersListStyles';


class UsersList extends Component {

    constructor(props) {
    super(props);
    
    }

    render() {
        return (
            <Table
            className={css(styles.table)}
                gridStyle={{
                    direction: 'inherit',
                }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">UserName</TableCell>
                        <TableCell align="center">E-mail</TableCell>
                        <TableCell align="center">Request for delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {
                        this.props.state.users.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row" align="center">
                                    {user.name}
                                </TableCell>
                                <TableCell align="center">
                                    {user.email}
                                </TableCell>
                                <TableCell align="center">
                                    <DeleteOutlineIcon/>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        );
    }
}

export default connect( 
  state => ({
    state: state
  }),
  dispatch => ({

  })
)(UsersList); 
