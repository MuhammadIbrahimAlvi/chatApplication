// import React from "react";
// import LoginPage from "./container/LoginPage/LoginPage";
// import SideBar from "./components/organisms/SideBar/SideBar";
// import Chats from "./components/organisms/Chats/Chats";
// import ChatScreen from "./container/ChatScreen/ChatScreen";

// function App() {
//   return (
//     <div className="App">
//       <LoginPage />
//       {/* <SideBar/>
//     <Chats/> */}
//       {/* <MainHeader/> */}
//       {/* <ChatAreaHeader/> */}
//       {/* <ChatScreen/> */}
//     </div>
//   );
// }

// export default App;
import React from "react";
import LoginPage from "./container/LoginPage/LoginPage";
import HomePage from "./container/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
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
