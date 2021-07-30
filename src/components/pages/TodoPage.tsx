import React, { useEffect, memo } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { selectUser, login, logout } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../organisms/Header";

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
      <Header color={"skyblue"}>{"未完了タスク"}</Header>
      <button
        onClick={() => {
          auth.signOut();
          history.push("/");
        }}
      >
        サインアウト
      </button>
    </div>
  );
});
