import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NewPage } from "./components/pages/NewPage";
import { LoginPage } from "./components/pages/LoginPage";

function App() {
  return (
    <>
      <NewPage />
      <LoginPage />
    </>
  );
}

export default App;
