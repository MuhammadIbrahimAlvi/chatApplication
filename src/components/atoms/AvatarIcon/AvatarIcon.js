import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./AvatarIcon.style";
import Avatar from "@material-ui/core/Avatar";
// import AvatarImage from "../../../images/avatar.jpeg";

<<<<<<< HEAD
const AvatarIcon = ({variant,...props}) => {
    return(
        <Avatar alt="Remy Sharp" src={props.url} variant={variant} />
    );
}
=======
const AvatarIcon = ({ variant, ...props }) => {
  return <Avatar alt="Remy Sharp" src={props.url} variant={variant} />;
};
>>>>>>> 40157c16ef98f240cc6fb565ba93e8b9f7492358
export default withStyles(styles)(AvatarIcon);
