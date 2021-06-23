import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Google_auth } from "./store/action/Google_auth";
import { get_users } from "./store/action/index";
function App() {
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const handleChange = (e) => {};
  return (
    <div>
      <div>Email is : </div>
      <button onClick={() => dispatch(Google_auth())}>Click</button>
      <button onClick={() => dispatch(get_users())}>Get All Users</button>
      <h3>Chat Users:</h3>
    </div>
  );
}

export default App;
