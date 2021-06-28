const Chat_user = (selectedUser) => {
  return (dispatch) => {
    // console.log(selectedUser);
    dispatch({ type: "CHATUSERDATA", payload: selectedUser });
  };
};

export default Chat_user;
