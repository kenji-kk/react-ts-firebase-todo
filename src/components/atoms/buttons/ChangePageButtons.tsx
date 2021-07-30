import React, { memo } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export const ChangePageButtons: React.FC = memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup>
        <Button style={{ borderColor: "skyblue", color: "skyblue" }}>
          未完了
        </Button>
        <Button style={{ borderColor: "#66CC33", color: "#66CC33" }}>
          完了
        </Button>
      </ButtonGroup>
    </div>
  );
});
