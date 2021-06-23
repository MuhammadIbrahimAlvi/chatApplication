import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Time.style';


const Time = ({classes}) => {

    const today = new Date();

    return(
        <p className = {classes.Time}>
            {
                today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            }
            
        </p>
    );
}
export default withStyles(styles)(Time);