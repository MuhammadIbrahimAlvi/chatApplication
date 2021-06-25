import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./HomePage.style";
import SideBar from "../../components/organisms/SideBar/SideBar";
import Chats from "../../components/organisms/Chats/Chats";
import ChatScreen from "../../container/ChatScreen/ChatScreen";
const HomePage = ({ classes }) => {
  return (
    <div className={classes.HomePage}>
      <SideBar />
      <Chats />
      <ChatScreen />
    </div>
  );
};
export default withStyles(styles)(HomePage);
