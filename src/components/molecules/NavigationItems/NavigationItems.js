import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./NavigationItems.style";
import { spacing } from "@material-ui/system";
// import { NavLink} from 'react-router-dom';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
// import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
const NavigationItems = ({ classes }) => {
  const navLinks = [
    {
      to: "",
      name: "Message",
      iconComponent: <ChatBubbleOutlineIcon className={classes.navIcons} />,
    },
    {
      to: "",
      name: "Find",
      iconComponent: <PeopleOutlineIcon className={classes.navIcons} />,
    },
    {
      to: "",
      name: "Payments",
      iconComponent: <LocalAtmIcon className={classes.navIcons} />,
    },
    {
      to: "",
      name: "Settings",
      iconComponent: <SettingsIcon className={classes.navIcons} />,
    },
  ];

  return (
    <div>
      <div className={classes.NavLinksContainer}>
        {navLinks.map((link) => (
          <p key={link.name} className={classes.NavLinks}>
            <a className={classes.Links} href={link.to}>
              {link.iconComponent}
              <span className={classes.Name}>{link.name}</span>
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(NavigationItems);
