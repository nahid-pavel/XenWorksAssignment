import React from "react";
import one from "../assets/one.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loader: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    zIndex: 100,
    position: "absolute",
    top: 30,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
  },
});

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <img src={one} width="80" height="80" alt="loader" />
    </div>
  );
}
