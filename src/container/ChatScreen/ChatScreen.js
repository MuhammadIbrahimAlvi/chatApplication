import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./ChatScreen.style";
import MainHeader from "../../components/molecules/MainHeader/MainHeader";
import ChatAreaHeader from "../../components/molecules/ChatAreaHeader/ChatAreaHeader";
import ChatArea from "../../components/organisms/ChatArea/ChatArea";

const ChatScreen = ({ classes }) => {
  return (
    <div className={classes.ChatScreen}>
      <MainHeader />
      <ChatAreaHeader />
      <ChatArea />
    </div>
  );
};

export default withStyles(styles)(ChatScreen);
