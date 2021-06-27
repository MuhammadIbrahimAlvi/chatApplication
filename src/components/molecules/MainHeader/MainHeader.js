import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./MainHeader.style";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PeopleIcon from "@material-ui/icons/People";
import AvatarIcon from "../../atoms/AvatarIcon/AvatarIcon";
import { useSelector } from "react-redux";
const MainHeader = ({ classes }) => {
  const current_user = useSelector((state) => state.current_user);

  return (
    <div className={classes.MainHeader}>
      <NotificationsNoneIcon className={classes.HeaderItems} />
      <PeopleIcon className={classes.HeaderItems} />
      <div className={classes.UserCard}>
        {/* <img src={current_user.image_url} /> */}
        <AvatarIcon url={current_user.image_url} />
        <h4>{current_user.name}</h4>
      </div>
    </div>
  );
};

export default withStyles(styles)(MainHeader);
