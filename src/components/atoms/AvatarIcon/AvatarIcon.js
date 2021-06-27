import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./AvatarIcon.style";
import Avatar from "@material-ui/core/Avatar";
// import AvatarImage from "../../../images/avatar.jpeg";

const AvatarIcon = ({ variant, ...props }) => {
  return <Avatar alt="Remy Sharp" src={props.url} variant={variant} />;
};
export default withStyles(styles)(AvatarIcon);
