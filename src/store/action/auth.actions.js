import firebase from "../../config/firebase";
const get_users = () => {
  return async (dispatch) => {
    let users = [];
    firebase
      .database()
      .ref("/")
      .child("users")
      .on("child_added", (data) => {
        // dispatch({ type: "SETFIREBASEUSERS", payload: data.val() });
        // console.log("firebase data=>", data.val());
        users.push(data.val());
        // console.log(users);
      });
    dispatch({ type: "SETFIREBASEUSERS", payload: users });
  };
};

export default get_users;
