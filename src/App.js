import React from "react";
import LoginPage from "./container/LoginPage/LoginPage";
import SideBar from "./components/organisms/SideBar/SideBar";
import Chats from "./components/organisms/Chats/Chats";
import ChatScreen from './container/ChatScreen/ChatScreen';

function App() {
  return (
    <div className = "App">
      {/* <LoginPage/> */}
    <SideBar/>
    <Chats/>
      {/* <MainHeader/> */}
      {/* <ChatAreaHeader/> */}
      <ChatScreen/>
    
    </div>
  );
}

export default App;
