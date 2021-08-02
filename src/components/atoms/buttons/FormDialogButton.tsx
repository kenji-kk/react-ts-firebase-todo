import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
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

export const FormDialogButton = ({ setOpen }) => {
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Button
      variant="outlined"
      onClick={handleClickOpen}
      className={classes.button}
    >
      <AddCircleIcon className={classes.icon} />
    </Button>
  );
};
