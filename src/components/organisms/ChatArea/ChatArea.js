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
        setChats(messages.val());
        findChats();
        console.log("Chats=>", chats);
      });
  };

  const findChats = () => {
    const data = Object.entries(chats);
    console.log(data, "data here");

    data.forEach((element) => {
      const key = element[0];
      if (key.includes(msgd_id.user_id && userid.user_id)) {
        setMEssageData(Object.entries(element[1].messages));
        console.log(messagesData, "rendering array stte");
      }
    });
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
    // console.log(chatMessages, "User Effect msgs");

    console.log("rendering");
  }, [msgd_id]);
  return (
    <>
      <div className={classes.chatAreaContainer}>
        {messagesData.map((val) => {
          if (val[1].reciever == msgd_id.user_id) {
            return (
              <div className={classes.sentMessage}>
                <p>{val[1].text}</p>
              </div>
            );
          } else {
            <div className={classes.recieveMessage}>
              <p>{val[1].text}</p>
            </div>;
          }
        })}

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
    </>
  );
};

export default withStyles(styles)(ChatArea);

// const msgchat = [];
// for (const property in messages) {
//   msgchat.push(property);
//   // console.log(`${property}`);
// }

// console.log(msgd_id);
// console.log(userid);
// console.log(chats);
// console.log(user_id.user_id);

// console.log("Messsages=>", message);

// console.log(messages.val());

// console.log("data=>", data);
// console.log(chatuserkey);
// console.log(chatMessages, "All Messages");
// setChats(chats.concat({ message }));
