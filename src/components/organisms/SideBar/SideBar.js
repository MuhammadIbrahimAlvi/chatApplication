import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SideBar.style';
import Logo from '../../atoms/Logo/Logo';
import NavigationItems from '../../molecules/NavigationItems/NavigationItems';
import Button from '../../atoms/Button/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const SideBar = ({ classes }) => {
    return (

        <div>
            <div className={classes.SideBar}>
                <div>
                    <Logo />
                    <NavigationItems />
                </div>

                <div>
                    {/* <Button>Logout</Button> */}
                    <p className={classes.NavLinks}>
                        
                        <a
                            className={classes.Links}
                            href='#'
                        >
                            <ExitToAppIcon/>
                            <span className={classes.Name}>Logout</span>  
                        </a>
                    </p>

                </div>

            </div>
        </div>


    );
}

export default withStyles(styles)(SideBar);