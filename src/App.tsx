import React, { useEffect } from "react";
import "./App.css";
import { Route } from "react-router";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

import { NewPage } from "./components/pages/NewPage";
import { LoginPage } from "./components/pages/LoginPage";
import { selectUser, login, logout } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { TodoPage } from "./components/pages/TodoPage";

export const App: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
          })
        );
        history.push("/todoPage/incomplete");
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);

  return (
    <>
      <Route exact path={"/"}>
        <NewPage />
      </Route>
      <Route exact path={"/login"}>
        <LoginPage />
      </Route>
      <TodoPage />
    </>
  );
};
