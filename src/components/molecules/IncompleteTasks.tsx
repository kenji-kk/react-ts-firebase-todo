import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "300vw",
  },
});

export const IncompleteTasks: React.FC = memo(() => {
  const classes = useStyles();

  return <div className={classes.root}>aaa</div>;
});
