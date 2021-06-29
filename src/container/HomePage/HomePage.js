import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './HomePage.style';
import SideBar from '../../components/organisms/SideBar/SideBar';
import Chats from '../../components/organisms/Chats/Chats';
import ChatScreen from '../../container/ChatScreen/ChatScreen';
import PaymentCard from "../../components/Payment/Payment";
import Img1 from "../../assets/moneyTransferCard.png";
import Details from "../../components/AccountDetails/Details";
import MediaQuery from "react-responsive";
import { Route, Switch } from "react-router-dom";

const HomePage = ({ classes }) => {
  return (
    <div className={classes.HomePage}>
      <MediaQuery minDeviceWidth={801}>
        <SideBar />
        <Chats />
        <div style={{ height: "100vh", width: "100%" }}>
          <ChatScreen />
        </div>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={800}>
        <SideBar />
        <Chats />
      </MediaQuery>

      {/* <PaymentCard img={Img1} img1={Img1} coins="20 Buy" />
      <PaymentCard img={Img1} img1={Img1} coins="40 Buy" />
      <PaymentCard img={Img1} img1={Img1} coins="60 Buy" />
      <PaymentCard img={Img1} img1={Img1} coins="80 Buy" />
      <PaymentCard img={Img1} img1={Img1} coins="100 Buy" />
      <Details /> */}
    </div>
  );
};
export default withStyles(styles)(HomePage);

// import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
// import EmojiData from "../../components/EmojiPicker/EmojiPicker";

// const [chosenEmoji, setChosenEmoji] = useState(null);

// const onEmojiClick = (event, emojiObject) => {
//   setChosenEmoji(emojiObject);
// };
