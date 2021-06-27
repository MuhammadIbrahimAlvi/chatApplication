import React, { useEffect } from "react";
import LoginPage from "./container/LoginPage/LoginPage";
import HomePage from "./container/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
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
      </Switch>
    </div>
  );
}
export default App;
