import React, { memo, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import { db } from "../../../firebase";

const useStyles = makeStyles({
  button: {
    borderColor: "skyblue",
    borderWidth: "5px",
    position: "fixed",
    right: "10vw",
    bottom: "10vw",
    "&:hover": {
      opacity: 0.5,
      transform: "scale(1.5)",
      transition: "0.3s",
    },
  },
  icon: {
    fontSize: "5vw",
    color: "skyblue",
  },
  dialogTitle: {
    textAlign: "center",
  },
});

export const InputDialog: React.FC = memo(() => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const user = useSelector(selectUser);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const taskSave = () => {
    db.collection("users").doc(user.uid).collection("incompleteTasks").add({
      title,
      content,
    });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={classes.button}
      >
        <AddCircleIcon className={classes.icon} />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          未完了TODO新規作成フォーム
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="タスク名を入力してください"
            fullWidth
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="タスク内容を入力してください"
            fullWidth
            multiline
            value={content}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setContent(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button
            onClick={() => {
              taskSave();
              handleClose();
            }}
            color="primary"
            disabled={title === "" || content === ""}
          >
            登録
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
