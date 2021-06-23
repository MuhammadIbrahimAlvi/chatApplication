import firebase from "../../config/firebase";

const get_users = () => {
  return (dispatch) => {
    firebase
      .database()
      .ref("/")
      .child("users")
      .on("child_added", (data) => {
        // console.log("All Users", data.val());
        dispatch({ type: "SETFIREBASEUSERS", payload: data.val() });
      });
  };
};

export { get_users };
