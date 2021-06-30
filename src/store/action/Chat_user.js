const Chat_user = (selectedUser, history) => {
  return (dispatch) => {
    if (window.innerWidth > 800) {
      console.log(window.innerWidth);

      dispatch({ type: "CHATUSERDATA", payload: selectedUser });
    } else {
      history.push(`/chat-page/`);
    }
  };
};

export default Chat_user;

