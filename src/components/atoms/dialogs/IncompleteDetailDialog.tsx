import React, { memo, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Icon, makeStyles } from "@material-ui/core";
import { db } from "../../../firebase";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";

const useStyles = makeStyles({
  button: {},
  dialogTitle: {
    textAlign: "center",
  },
});

interface Props {
  uid: string;
  did: string;
  originTitle: string;
  originContent: string;
}

export const IncompleteDetailDialog: React.FC<Props> = memo(
  ({ uid, did, originTitle, originContent }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState<string>(originTitle);
    const [content, setContent] = useState<string>(originContent);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setTitle(originTitle);
      setContent(originContent);
      setOpen(false);
    };

    const taskEdit = () => {
      db.collection("users")
        .doc(uid)
        .collection("incompleteTasks")
        .doc(did)
        .set({
          title,
          content,
        });
    };

    return (
      <>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          className={classes.button}
          endIcon={<SettingsApplicationsIcon />}
        >
          詳細・編集
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
            未完了TODO編集フォーム
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="タスク名を編集してください"
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
              label="タスク内容を編集してください"
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
                taskEdit();
                handleClose();
                setTitle(title);
                setContent(content);
              }}
              color="primary"
              disabled={title === "" || content === ""}
            >
              編集
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
);
