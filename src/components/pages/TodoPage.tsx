import React, { useEffect, memo } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { selectUser, login, logout } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../organisms/Header";
import { Route, Switch, useRouteMatch } from "react-router";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#333333",
    margin: 0,
    minHeight: "100vh",
  },
});

export const TodoPage: React.FC = memo(() => {
  const history = useHistory();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const classes = useStyles();
  let { path, url } = useRouteMatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        return;
      } else {
        dispatch(logout());
        history.push("/");
      }
    });
  }, []);

  if (!user.uid) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path={`${path}`}>
          <Header color={"skyblue"}>{"未完了タスク"}</Header>
        </Route>
        <Route exact path={`${path}/complete`}>
          <Header color={"#66CC33"}>{"完了タスク"}</Header>
        </Route>
      </Switch>
    </div>
  );
});
