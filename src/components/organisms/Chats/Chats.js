import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Chats.style';
import SearchBar from '../../atoms/SearchBar/SearchBar';
import UsersList from '../../molecules/UsersList/UsersList';


const Chats = ( { classes }) => {
    return (

        <div className ={ classes.Chats}>
            <h4>Chats</h4>
            <SearchBar/>
            <UsersList/>
        </div>


    );
}

export default withStyles(styles)(Chats);