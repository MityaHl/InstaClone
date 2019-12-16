import React, { useEffect } from 'react';
import Axios from 'axios';
import { css } from 'aphrodite';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteUserDialogContainer from './DeleteUserDialog/DeleteUserDialogContainer';
import styles from './UsersListStyles';


const UsersList = ({users, authUser, onDeleteUser, onQueryUsers, onChangeAdmin}) => {

    const query = (response) => {
        onQueryUsers(response);
    };

   useEffect(
     () => {
      Axios
        .get('http://localhost:8000/users')
        .then(response => {
           query(response.data);
        })
      }, []
    );

    return (
        <Table
            className={css(styles.table)}>
            <TableHead>
                <TableRow>
                    <TableCell align="center">Login</TableCell>
                    <TableCell align="center">UserName</TableCell>
                    <TableCell align="center">SurName</TableCell>
                    <TableCell align="center">E-mail</TableCell>
                    <TableCell align="center">Admin</TableCell>
                    <TableCell align="center">Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody >
                {
                   users.map((user, index) => (
                        <TableRow key={user.id}>
                            <TableCell component="th" scope="row" align="center">
                                {user.login}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {user.name}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {user.surname}
                            </TableCell>
                            <TableCell align="center">
                                {user.email}
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox checked={user.admin} onChange={ () => {
                                    Axios
                                        .post('http://localhost:8000/editAdmin', {admin: !user.admin, id: user.id})     
                                        .then(
                                            onChangeAdmin({id: user.id, admin: !user.admin})
                                        )
                                    }
                                }/>
                            </TableCell>
                            <TableCell align="center">
                                {user.deleted ? (<DeleteOutlineIcon onClick={onDeleteUser}/>) : (<div/>)}
                            </TableCell>
                            <DeleteUserDialogContainer user={user}/>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
}

export default UsersList; 
