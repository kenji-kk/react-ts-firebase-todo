import React, { memo, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const useStyles = makeStyles({
  root: {
    height: "300vw",
  },
});

export const IncompleteTasks: React.FC = memo(() => {
  const classes = useStyles();
  const user = useSelector(selectUser);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unSub = db
      .collection("users")
      .doc(user.uid)
      .collection("incompleteTasks")
      .onSnapshot((snapshot) => {
        setTasks(
          snapshot.docs.map((doc) => ({
            title: doc.data().title,
            content: doc.data().content,
          }))
        );
      });
    return () => {
      unSub();
    };
  }, [user]);

  return (
    <div className={classes.root}>
      {tasks.map((task) => (
        <>
          <p>{task.title}</p>
          <p>{task.content}</p>
        </>
      ))}
    </div>
  );
});
