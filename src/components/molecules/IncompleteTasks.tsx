import React, { memo, useState, useEffect } from "react";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { ToCompleteButton } from "../atoms/buttons/ToCompleteButton";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "50vw",
      backgroundColor: "skyblue",
      margin: "0 auto",
      padding: "1vw",
      borderBottom: "1px solid #333333",
      "&:hover": {
        opacity: 0.9,
        transition: "0.3s",
      },
    },
    text: {
      fontSize: "1.8vw",
      width: "30vw",
      overflowWrap: "break-word",
      display: "inline-block",
      verticalAlign: "middle",
    },
  })
);

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
            did: doc.id,
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
    <>
      {tasks.map((task, index) => {
        return (
          <div key={index} className={classes.root}>
            <div className={classes.text}>
              {task.title}
              <ToCompleteButton
                did={task.did}
                uid={user.uid}
                title={task.title}
                content={task.content}
              />
            </div>
          </div>
        );
      })}
    </>
  );
});
