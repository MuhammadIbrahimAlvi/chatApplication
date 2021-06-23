import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './MainHeader.style';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PeopleIcon from '@material-ui/icons/People';
import AvatarIcon from '../../atoms/AvatarIcon/AvatarIcon';

const MainHeader = ({ classes }) => {
    return (
        <div className={classes.MainHeader}>
         
                <NotificationsNoneIcon className={classes.HeaderItems}
                />
                <PeopleIcon
                className={classes.HeaderItems}
                />
                <div className={classes.UserCard}>
                <AvatarIcon/>
                <h4>
                User Name</h4>
                </div>
              
        </div>
    );
}

export default withStyles(styles)(MainHeader);