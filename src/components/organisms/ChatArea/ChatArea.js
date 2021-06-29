import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./ChatArea.style";
import SendIcon from "@material-ui/icons/Send";
import { useSelector } from "react-redux";
import firebase from "../../../config/firebase";

const ChatArea = ({ classes }) => {
  const [chats, setChats] = useState({});
  const [message, setMessage] = useState("");
  const [messagesData, setMEssageData] = useState([]);

  const userid = useSelector((state) => state.current_user);
  const msgd_id = useSelector((state) => state.chat_user);

  const send_message = () => {
    const newid = Merge_ids();

    firebase.database().ref("/").child(`chats/${newid}/messages`).push({
      sender: userid.user_id,
      reciever: msgd_id.user_id,
      text: message,
    });
  };
  const get_messages = async () => {
    await firebase
      .database()
      .ref("/")
      .child("chats")
      .on("value", (messages) => {
        console.log(messages.val());
        setChats({ ...messages.val() } || {});
      });
  };

  const findChats = () => {
    const chatRoomId = Merge_ids();
    const chatMsgs = chats[chatRoomId];
    console.log(chatMsgs);
    if (chatMsgs && chatMsgs.messages) {
      console.log(Object.entries(chatMsgs.messages));
      setMEssageData([...Object.entries(chatMsgs.messages)]);
    } else {
      setMEssageData([]);
    }
  };

  const Merge_ids = () => {
    if (userid.user_id < msgd_id.user_id) {
      return userid.user_id + msgd_id.user_id;
    } else {
      return msgd_id.user_id + userid.user_id;
    }
  };
  useEffect(async () => {
    await get_messages();
  }, [msgd_id]);
  useEffect(async () => {
    await findChats();
  }, [chats]);
  return (
    <>
      <div className={classes.chatAreaContainer}>
        {messagesData.map((val) => {
          console.log(val);
          if (val[1].reciever == msgd_id.user_id) {
            return (
              <div className={classes.sentMessage}>
                <p>{val[1].text}</p>
              </div>
            );
          } else {
            return (
              <div className={classes.receivedMessage}>
                <p>{val[1].text}</p>
              </div>
            );
          }
        })}
      </div>
      <div class="chatAreaInput">
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          name="text"
          className={classes.Input}
          rows="2"
          placeholder="Type a message..."
        ></textarea>
        <SendIcon
          style={{ color: "rgb(87, 109, 204)", padding: "5px 5px" }}
          onClick={send_message}
          // onClick={() =>
            // chats !== undefined ? alert("Undefined") : send_message()
          // }
        />
      </div>
    </>
  );
};

export default withStyles(styles)(ChatArea);
