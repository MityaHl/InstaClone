import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import styles from './PostsListStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const PostsList = ({posts}) => {

    return (
        <Table
        className={css(styles.table)}
            gridStyle={{
                direction: 'inherit',
            }}>
            <TableHead>
                <TableRow>
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Author</TableCell>
                    <TableCell align="center">Content</TableCell>
                    <TableCell align="center">Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody >
                {
                    posts.map((post, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row" align="center">
                                {post.title}
                            </TableCell>
                            <TableCell align="center">
                                {post.author}
                            </TableCell>
                            <TableCell align="left">
                                {post.content}
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

export default PostsList;
