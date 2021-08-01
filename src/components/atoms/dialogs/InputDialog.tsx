import React, { memo } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core";

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
});

export const InputDialog: React.FC = memo(() => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
