import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./HomePage.style";
import SideBar from "../../components/organisms/SideBar/SideBar";
import Chats from "../../components/organisms/Chats/Chats";
import ChatScreen from "../../container/ChatScreen/ChatScreen";
import PaymentCard from "../../components/Payment/Payment";
import Img1 from "../../assets/moneyTransferCard.png";
import Details from "../../components/AccountDetails/Details";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import EmojiData from "../../components/EmojiPicker/EmojiPicker";
const HomePage = ({ classes }) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  return (
    <div className={classes.HomePage}>
      <SideBar />
      <Chats />
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <ChatScreen />

        {/* <PaymentCard img={Img1} img1={Img1} coins="20 Buy" />
        <PaymentCard img={Img1} img1={Img1} coins="40 Buy" />
        <PaymentCard img={Img1} img1={Img1} coins="60 Buy" />
        <PaymentCard img={Img1} img1={Img1} coins="80 Buy" />
        <PaymentCard img={Img1} img1={Img1} coins="100 Buy" />

        <Details /> */}
      </div>
    </div>
  );
};
export default withStyles(styles)(HomePage);
