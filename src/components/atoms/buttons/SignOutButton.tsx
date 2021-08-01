import React, { memo } from "react";
import Button from "@material-ui/core/Button";
import { auth } from "../../../firebase";
import { useHistory } from "react-router-dom";

export const SignOutButton: React.FC = memo(() => {
  const history = useHistory();
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => {
        auth.signOut();
        history.push("/");
      }}
    >
      サインアウト
    </Button>
  );
});
