import React, { memo } from "react";
import { ChangePageButtons } from "../atoms/buttons/ChangePageButtons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    margin: 0,
  },
  subTitle: {
    textAlign: "center",
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
    <div>
      <h1 className={classes.title} style={{ color }}>
        TODOアプリ
      </h1>
      <h2 className={classes.subTitle} style={{ color }}>
        {children}
      </h2>
      <ChangePageButtons />
    </div>
  );
});
