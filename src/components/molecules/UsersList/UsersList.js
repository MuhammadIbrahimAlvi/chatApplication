import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './UsersList.style';
import AvatarIcon from '../../atoms/AvatarIcon/AvatarIcon';
import Time from '../../atoms/Time/Time';
// import SearchBar from '../../atoms/SearchBar/SearchBar';
import '../../../App.css';

const UsersList = ({ classes }) => {
    const Users = [
        {
            id : '1',
            name: 'Ali'
        },
        {
            id : '2',
            name: 'Ibrahim'
        },
        {
            id : '3',
            name: 'Zaid'
        },
        {
            id : '4',
            name: 'Hamza'
        },
        {
            id : '5',
            name: 'Kashif'
        },
        {
            id : '6',
            name: 'Hamza'
        },
        {
            id : '7',
            name: 'Hamza'
        },
        {
            id : '8',
            name: 'Hamza'
        },
        {
            id : '9',
            name: 'Hamza'
        },
        {
            id : '10',
            name: 'Hamza'
        }
    ]
    return (
        <div className ={classes.UsersListContainer}>
            {
                Users.map( user => 
                <div className={classes.UsersList} key ={user.id}>
                    <div className = {classes.UserCard}>
                    <AvatarIcon/>
                    <h5
                    className={classes.userName}
                    >{user.name}</h5>
                    </div>
                    <div >
                    <Time/>
                    </div>                  
                </div> )
            }
        </div>
    );
}
export default withStyles(styles)(UsersList);