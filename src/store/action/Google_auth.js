import firebase from "../../config/firebase";

const Google_auth = (history) => {
  return (dispatch) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // var token = result.credential.accessToken;
        // var user = result.user;
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        const create_user = {
          name: user.displayName,
          user_id: user.uid,
          email: user.email,
          image_url: user.photoURL,
        };
        firebase
          .database()
          .ref("/")
          .child(`users/${user.uid}`)
          .set(create_user)
          .then(() => {
            dispatch({
              type: "Set_User_By_Auth",
              payload: create_user,
            });
            history.push("/userpanel");
          });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };
};

export { Google_auth };
// import history from 'react-router-dom;
// import { useDispatch } from "react-redux";
// const history = useHistory();
// import { useHistory } from "react-router-dom"
// history.push("/userpanel");
