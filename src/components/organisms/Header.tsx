import React, { memo } from "react";
import { ChangePageButtons } from "../atoms/buttons/ChangePageButtons";
import { makeStyles } from "@material-ui/core/styles";
import { SignOutButton } from "../atoms/buttons/SignOutButton";

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  title: {
    textAlign: "center",
    margin: 0,
  },
  signOut: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

interface PROPS {
  color: string;
  children: string;
}

export const Header: React.FC<PROPS> = memo((props) => {
  const { color, children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title} style={{ color }}>
        {children}
      </h1>
      <ChangePageButtons />
      <div className={classes.signOut}>
        <SignOutButton />
      </div>
    </div>
  );
});
