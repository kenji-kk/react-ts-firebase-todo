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
  button: {
    fontWeight: "bold",
    width: "10vw",
    fontSize: "1.2vw",
    "&:hover": {
      backgroundColor: "darkgray",
      transition: "0.3s",
    },
  },
  icon: {
    fontSize: "2vw",
  },
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

export const CompleteDetailDialog: React.FC<Props> = memo(
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

    return (
      <>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          className={classes.button}
        >
          詳細　<SettingsApplicationsIcon className={classes.icon}/>
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
            完了TODO詳細フォーム
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="タスク名です"
              fullWidth
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
              InputProps={{
                readOnly: true,
              }}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="タスク内容です"
              fullWidth
              multiline
              value={content}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setContent(e.target.value);
              }}
              InputProps={{
                readOnly: true,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              閉じる
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
);
