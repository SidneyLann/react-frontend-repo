import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const Level3GridC0 = styled(Grid)({});

function Level3GridC(props) {
  return (
    <Level3GridC0 item={props.item} container={props.container}>
      {props.children}
    </Level3GridC0>
  );
}

export default Level3GridC;
