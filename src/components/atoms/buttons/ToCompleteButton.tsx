import React, { memo } from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { db } from "./../../../firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "forestgreen",
      fontWeight: "bold",
      width: "8vw",
      fontSize: "1.2vw",
      "&:hover": {
        backgroundColor: "#008000",
        transition: "0.3s",
      },
    },
    icon: {
      fontSize: "1.7vw",
      
    },
  })
);

interface Props {
  uid: string;
  did: string;
  title: string;
  content: string;
}

export const ToCompleteButton: React.FC<Props> = memo(
  ({ uid, did, title, content }) => {
    const classes = useStyles();
    const toComplete = () => {
      db.collection("users").doc(uid).collection("completeTasks").add({
        title,
        content,
      });
      db.collection("users")
        .doc(uid)
        .collection("incompleteTasks")
        .doc(did)
        .delete();
    };

    return (
      <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => {
          toComplete();
        }}
      >
        完了　<Icon className={classes.icon}>send</Icon>
      </Button>
      
      </>
    );
  }
);
