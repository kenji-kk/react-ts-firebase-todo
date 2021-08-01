import React, { useEffect, memo } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { selectUser, logout } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../organisms/Header";
import { Route } from "react-router";
import { InputDialog } from "../atoms/dialogs/InputDialog";
import { IncompleteTasks } from "../molecules/IncompleteTasks";

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
      <Route exact path={"/todoPage/incomplete"}>
        <Header color={"skyblue"}>{"未完了タスク"}</Header>
        <IncompleteTasks />
        <InputDialog />
      </Route>
      <Route exact path={"/todoPage/complete"}>
        <Header color={"#66CC33"}>{"完了タスク"}</Header>
      </Route>
    </div>
  );
});
