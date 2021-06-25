import React from "react";
import LoginPage from "./container/LoginPage/LoginPage";
import HomePage from "./container/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <LoginPage/> */}
        <HomePage />

      </div>
    </BrowserRouter>

  );
}

export default App;
