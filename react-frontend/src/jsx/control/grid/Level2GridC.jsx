import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const Level2GridC0 = styled(Grid)({});

function Level2GridC(props) {
  return (
    <Level2GridC0 item={props.item} container={props.container}>
      {props.children}
    </Level2GridC0>
  );
}

export default Level2GridC;
