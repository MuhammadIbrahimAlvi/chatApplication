
import React from 'react';
import { styles } from './Logo.style';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../../images/logo.png';
import Heading from '../Heading/Heading';

const Logo = ({ classes }) => {
    return (
        <div>
            <div className={classes.Logo}>
                <img className={classes.LogoImage} src={logo} alt="" />
            </div>
            
        </div>

    );
}

export default withStyles(styles)(Logo);