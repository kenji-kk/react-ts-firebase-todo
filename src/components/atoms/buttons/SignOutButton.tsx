import React, { memo } from "react";
import Button from "@material-ui/core/Button";
import { auth } from "../../../firebase";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    width: "9vw",
    fontSize: "1vw",
  },
});

export const SignOutButton: React.FC = memo(() => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => {
        auth.signOut();
        history.push("/");
      }}
      className={classes.button}
    >
      サインアウト
    </Button>
  );
});
