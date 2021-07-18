import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";

import { NewPage } from "./components/pages/NewPage";
import { LoginPage } from "./components/pages/LoginPage";

function App() {
  return (
    <>
      <Route exact path={"/"}>
        <NewPage />
      </Route>
      <Route exact path={"/login"}>
        <LoginPage />
      </Route>
    </>
  );
}

export default App;
