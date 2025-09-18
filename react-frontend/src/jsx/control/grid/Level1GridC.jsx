import React from "react";
import { styled } from '@mui/system';
//import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const GRID_LEVE1 = styled(Grid)({
  background:'#f2f2f2'
});

function Level1GridC(props) {
  return (
    <GRID_LEVE1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </GRID_LEVE1>
  );
}

export default Level1GridC;
