import React, { useEffect } from "react";
import LoginPage from "./container/LoginPage/LoginPage";
import HomePage from "./container/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ChatPage from "./container/ChatsPage/ChatsPage"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("Current User"));
    dispatch({
      type: "Set_User_By_Auth",
      payload: currentUser,
    });
  }, []);
  
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route exact path="/userpanel">
          <HomePage />
        </Route>
        <Route exact path='/chat-page/'>
          <ChatPage />
          {/* <ChatScreen/> */}
        </Route>
      </Switch>
    </div>
  );
}
export default App;
