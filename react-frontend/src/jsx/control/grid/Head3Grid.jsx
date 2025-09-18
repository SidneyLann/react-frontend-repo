import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const GRID_LEVE1 = styled(Grid)({});

function Head3Grid(props) {
  return (
    <GRID_LEVE1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </GRID_LEVE1>
  );
}

export default Head3Grid;
