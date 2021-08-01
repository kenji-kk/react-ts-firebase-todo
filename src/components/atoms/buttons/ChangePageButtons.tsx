import React, { memo } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
    incompleteButton: {
      "&:hover": {
        opacity: 0.5,
        transition: "0.3s",
      },
    },
    completeButton: {
      "&:hover": {
        opacity: 0.5,
        transition: "0.3s",
      },
    },
  })
);

export const ChangePageButtons: React.FC = memo(() => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <ButtonGroup>
        <Button
          className={classes.incompleteButton}
          style={{ borderColor: "skyblue", color: "skyblue" }}
          onClick={() => {
            history.push("/todoPage/incomplete");
          }}
        >
          未完了
        </Button>
        <Button
          className={classes.completeButton}
          style={{ borderColor: "#66CC33", color: "#66CC33" }}
          onClick={() => {
            history.push("/todoPage/complete");
          }}
        >
          完了
        </Button>
      </ButtonGroup>
    </div>
  );
});
