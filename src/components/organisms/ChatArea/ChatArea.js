import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./ChatArea.style";
import SendIcon from "@material-ui/icons/Send";
import { useSelector } from "react-redux";
import firebase from "../../../config/firebase";
const ChatArea = ({ classes }) => {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const user_id = useSelector((state) => state.current_user);
  const msgd_id = useSelector((state) => state.chat_user);
  const send_message = () => {
    // setChats(chats.concat({ message }));
    const newid = Merge_ids();
    firebase.database().ref("/").child(`chats/${newid}`).push({
      messages: message,
      // name: user_id.name,
      uid: newid,
    });
  };
  const get_messages = (uid) => {
    firebase
      .database()
      .ref("/")
      .child("chats")
      .on("child_added", (messages) => {
        setChats(chats.concat({ messages }));
      });
  };
  const Merge_ids = () => {
    if (user_id.user_id < msgd_id.user_id) {
      return user_id.user_id + msgd_id.user_id;
    } else {
      return msgd_id.user_id + user_id.user_id;
    }
  };

  return (
    <div className={classes.chatAreaContainer}>
      <div className={classes.ChatArea}>
        {/* <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            deleniti? adipisicing elit. Quas, deleniti?
          </p> */}
        {chats.map((message, index) => {
          return (
            <div className={classes.sentMessage}>
              <p key={index}>{message.msg}</p>
            </div>
          );
        })}

        {/* 
        <div className={classes.receivedMessage}>
          <p>Lorem ipsum dolor sit amet.</p>
        </div> */}
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
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(ChatArea);
