import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './NavigationItems.style';
// import { NavLink} from 'react-router-dom';

const NavigationItems = ({ classes }) => {

    const navLinks = [
        {
            to: '',
            name: 'Message'
            // iconComponent: <HomeIcon />
        },
        {
            to: '',
            name: 'Find'
            // iconComponent: <AnalyticsIcon />
        },
        {
            to: '',
            name: 'Meetings'
            // iconComponent: <ProductIcon />
        },
        {
            to: '',
            name: 'Settings'
            // iconComponent: <ManagementIcon />
        }

    ]

    return (

        <div>
            <div className={classes.NavLinks}>
                {
                    navLinks.map(link =>

                        <p key={link.name}>
                            {/* {link.iconComponent} */}
                            <a 
                            className={classes.NavLinks}
                            href={link.to}
                            >            
                            {link.name}
                            </a>
                        </p>
                    )
                }

            </div>
        </div>


    );
}

export default withStyles(styles)(NavigationItems);