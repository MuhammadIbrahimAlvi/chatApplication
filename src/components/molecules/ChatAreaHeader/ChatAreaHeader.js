import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ChatAreaHeader.style';
import AvatarIcon from '../../atoms/AvatarIcon/AvatarIcon';

const ChatAreaHeader = ({ classes }) => {
    return (
        <div className={classes.ChatAreaHeader}>
            <AvatarIcon/>
            <div style={{padding: '10px'}}>
                <h5 style = {{margin: '0px'}}>User Name</h5>
                <span style={{fontSize:'12px'}}>Online</span>
            </div>
        </div>
       
    );
}

export default withStyles(styles)(ChatAreaHeader);