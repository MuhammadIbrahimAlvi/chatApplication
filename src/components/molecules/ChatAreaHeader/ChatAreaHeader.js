import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./ChatAreaHeader.style";
import AvatarIcon from "../../atoms/AvatarIcon/AvatarIcon";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useSelector } from "react-redux";


const ChatAreaHeader = ({ classes }) => {
  const CurrentUserData = useSelector((state) => state.chat_user);
  // console.log(CurrentUserData);

  return (
    <div className={classes.ChatAreaHeader}>
      {/* Left Side */}
      <div className={classes.ChatHeader_Left}>
      <AvatarIcon url={CurrentUserData.image_url} />
      <div style={{ padding: "10px" }}>
        <h5 style={{ margin: "0px" }}>{CurrentUserData.name}</h5>
        {/* <span style={{ fontSize: "12px" }}>Online</span> */}
      </div>
      </div>
      {/* Right Side */}
      <div className={classes.ChatHeader_Right}>
        <CallIcon/>
        <LocationOnIcon/>
        <MoreVertIcon/>
      </div>
    </div>
  );
};

export default withStyles(styles)(ChatAreaHeader);
