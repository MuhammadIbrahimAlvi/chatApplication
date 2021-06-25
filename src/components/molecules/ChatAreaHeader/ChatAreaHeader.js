import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./ChatAreaHeader.style";
import AvatarIcon from "../../atoms/AvatarIcon/AvatarIcon";
import { useSelector } from "react-redux";
const ChatAreaHeader = ({ classes }) => {
  const CurrentUserData = useSelector((state) => state.chat_user);
  console.log(CurrentUserData);

  return (
    <div className={classes.ChatAreaHeader}>
      <img src={CurrentUserData.image_url} width="30px" height="40px" />
      <div style={{ padding: "10px" }}>
        <h5 style={{ margin: "0px" }}>{CurrentUserData.name}</h5>
        <span style={{ fontSize: "12px" }}>Online</span>
      </div>
    </div>
  );
};

export default withStyles(styles)(ChatAreaHeader);
