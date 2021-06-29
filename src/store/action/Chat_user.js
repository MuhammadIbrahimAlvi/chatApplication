const Chat_user = (selectedUser, history) => {
  return (dispatch) => {
    // console.log(selectedUser);
    dispatch({ type: "CHATUSERDATA", payload: selectedUser });
  };
  // history.push(`/chat/${selectedUser.user_id}`);
};

export default Chat_user;
