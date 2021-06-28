import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './NavigationItems.style';
import { spacing } from '@material-ui/system';
import { NavLink} from 'react-router-dom';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SettingsIcon from '@material-ui/icons/Settings';

const NavigationItems = ({ classes }) => {

    const navLinks = [
        {
            to: '/userpanel',
            name: 'Message',
            iconComponent: <ChatBubbleOutlineIcon
             className={classes.navIcons}/>
        },
        {
            to: '/findusers',
            name: 'Find',
            iconComponent: <PeopleOutlineIcon
            className={classes.navIcons}
            />
        },
        {
            to: '/meetings',
            name: 'Meetings',
            iconComponent: <EventAvailableIcon className={classes.navIcons} />
        },
        {
            to: '/settings',
            name: 'Settings',
            iconComponent: <SettingsIcon className={classes.navIcons} />
        }

    ]

    return (

        <div>
            <div className={classes.NavLinksContainer}>
                {
                    navLinks.map(link =>

                        <p key={link.name} className={classes.NavLinks} >
                            <NavLink
                            className={classes.Links}
                            to={link.to}
                            >       
                            {link.iconComponent} 
                            <span className={classes.Name}>{link.name}</span>    
                            </NavLink>
                        </p>
                    )
                }

            </div>
        </div>


    );
}

export default withStyles(styles)(NavigationItems);
