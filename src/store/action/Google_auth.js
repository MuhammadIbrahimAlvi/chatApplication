import firebase from "../../config/firebase";
// import history from 'react-router-dom;
// import { useDispatch } from "react-redux";
const Google_auth = () => {
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
              type: "Set_User",
              payload: create_user,
            });
            alert("Inserted Successfully");
            // here we will pass a router with
            // history.push('/componentUrl')
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
