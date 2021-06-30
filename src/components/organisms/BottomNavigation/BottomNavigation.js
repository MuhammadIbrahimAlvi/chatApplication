import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './BottomNavigation.style';
const BottomNavigationBar = ({ classes }) => {
    return (
        <div className = {classes.BottomNavigationBar}>
            
        </div>
    );
}

export default withStyles(styles)(BottomNavigationBar);